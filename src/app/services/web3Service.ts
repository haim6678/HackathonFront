import {Injectable} from '@angular/core';
import * as Web3 from 'web3';

declare let require: any;
declare let window: any;

@Injectable()
export class Web3Service {
  private web3: any;

  constructor() {

    //init web3 obj
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);

      if (this.web3.version.network !== '4') {
        alert('Please connect to the Rinkeby network');
      }
    } else {
      console.warn(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      );
      this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }


    //choose first account from 10 rpc accounts
    this.web3.eth.defaultAccount = this.web3.eth.accounts[0];


    //copy abi from remix compile/details tab - this is the contract API
    var testContract = this.web3.eth.contract([
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "name",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "age",
            "type": "uint256"
          }
        ],
        "name": "Instructor",
        "type": "event"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_fName",
            "type": "string"
          },
          {
            "name": "_age",
            "type": "uint256"
          }
        ],
        "name": "setInstructor",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getInstructor",
        "outputs": [
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ]);

    // this is the contract address, the contract address is from remix run tab after create click
    let contractAddress = '0x0c6f08546d8f7c837004f63ba373e3bec50b50bd';
    //define contract
    var test = testContract.at(contractAddress);


    //perform transaction in async way
    const get = async (web3, account) => {

      //get account balance
      const balance = await web3.eth.getBalance(account);
      test.getInstructor(function (error, result) {
        if (!error) {
          //console.log(result)
        } else {
          //console.error(error);
        }
      });
      return balance;
    };

    // this is sync ????
    test.getInstructor(function (error, result) {
      if (!error) {
        //console.log(result)
      } else {
        //console.error(error);
      }
    });


    //get block by clock num
    var Block = this.web3.eth.getBlock(15);
    console.log(Block);


    //get all transactions in block details by transaction num
    Block.transactions.forEach((e) => {
      let getT = this.web3.eth.getTransaction(e);
      console.log(getT);
      let Tdata = this.web3.toAscii(getT.input);
      if (getT.to == "needed Address") {
        console.log("find");
      }
    });

    get(this.web3, this.web3.eth.accounts[0]);

    // test.getInstructor(function (error, result) {
    //   if (!error) {
    //     console.log(result)
    //   } else {
    //     console.error(error);
    //   }
    // })


    //listen to event on contract instead of requesting over and over
    //the parameters are optional
    var instructorEvent = test.Instructor({}, {fromBlock: 17, toBlock: 'latest'});

    instructorEvent.watch(function (error, result) {
      if (!error) {
        //console.log(result);
      } else {
        //console.log(error);
      }
    });

    // test.setInstructor('haim', 3, (err, res) => {
    //   if (err) {
    //     //console.log(err);
    //   }
    // });


    // listen to even, and filter income
    const filter = this.web3.eth.filter({
      fromBlock: 0,
      toBlock: 5,
      address: contractAddress
    });

    filter.watch((error, result) => {
      console.log(result);
    })


  }

  public creatAccount() {
    let acc = this.web3.eth.personal.newAccount('abc123');
    console.log(acc);
  }
}
