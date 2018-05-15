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
    let testContract = this.web3.eth.contract(
      [
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
        },
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
        }
      ]
    );

    // this is the contract address, the contract address is from remix run tab after create click
    let contractAddress = '0x5a89a15a55daad3ba9cb2a072196e8243d2a5041';
    //define contract
    let test = testContract.at(contractAddress);

    // test.getInstructor(function (error, result) {
    //   if (!error) {
    //     console.log(result)
    //   } else {
    //     console.error(error);
    //   }
    // });
    //
    // test.setInstructor('haim', 33);
    //
    // //perform transaction in async way
    // const get = async (web3, account) => {
    //
    //
    //   //get account balance
    //   const balance = await web3.eth.getBalance(account);
    //   test.getInstructor(function (error, result) {
    //     if (!error) {
    //       console.log(result)
    //     } else {
    //       console.error(error);
    //     }
    //   });
    //   return balance;
    // };
    //
    // // this is sync ????
    // test.getInstructor(function (error, result) {
    //   if (!error) {
    //     console.log(result)
    //   } else {
    //     console.error(error);
    //   }
    // });
    //
    //
    // //get block by clock num
    // let Block = this.web3.eth.getBlock(15);
    // console.log(Block);
    //
    //
    // //get all transactions in block details by transaction num
    // Block.transactions.forEach((e) => {
    //   let getT = this.web3.eth.getTransaction(e);
    //   console.log(getT);
    //   let Tdata = this.web3.toAscii(getT.input);
    //   if (getT.to == "needed Address") {
    //     //console.log("find");
    //   }
    // });
    //
    // get(this.web3, this.web3.eth.accounts[0]);
    //
    //
    // //listen to event on contract instead of requesting over and over
    // //the parameters are optional
    // let instructorEvent = test.Instructor({}, {fromBlock: 17, toBlock: 'latest'});
    //
    // instructorEvent.watch(function (error, result) {
    //   if (!error) {
    //     //console.log(result);
    //   } else {
    //     //console.log(error);
    //   }
    // });
    //
    // test.setInstructor('haim', 3, (result, err) => {
    //   // console.log(result);
    // });
    //
    //
    // // listen to even, and filter income
    // const filter = this.web3.eth.filter({
    //   fromBlock: 0,
    //   toBlock: 5,
    //   address: contractAddress
    // });
    //
    // filter.watch((error, result) => {
    //   //console.log(result);
    // });
    //
    // //get number of sent transactions
    // let num = this.web3.eth.getTransactionCount(this.web3.eth.accounts[0]);
    // //console.log(num);

    //get last range of transactions for given account
    let temp = this.getTransactionsByAccount(this.web3.eth.accounts[0], 0, 20);
    //console.log(temp)
  }

  getTransactionsByAccount(myaccount, startBlockNumber, endBlockNumber) {
    //get end block
    if (endBlockNumber == null) {
      endBlockNumber = this.web3.eth.blockNumber;
    }

    //if start is null get last 10 blocks
    if (startBlockNumber == null) {
      startBlockNumber = endBlockNumber - 10;
    }
    console.log("Searching for transactions to/from account \"" + myaccount + "\" within blocks " + startBlockNumber + " and " + endBlockNumber);

    let arr = [];
    for (let i = startBlockNumber; i <= endBlockNumber; i++) {
      if (i % 1000 == 0) {
        console.log("Searching block " + i);
      }
      let block = this.web3.eth.getBlock(i, true);
      console.log(block);
      if (block != null && block.transactions != null) {
        block.transactions.forEach(function (e) {
          if (myaccount == "*" || myaccount == e.from || myaccount == e.to) {
            //console.log(e);
            arr.push(e);
          }
        })
      }
    }
    return arr;
  }

  public creatAccount() {
    let acc = this.web3.eth.personal.newAccount('abc123');
    console.log(acc);
  }
}
