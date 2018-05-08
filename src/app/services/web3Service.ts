import {Injectable} from '@angular/core';
import * as Web3 from 'web3';

declare let require: any;
declare let window: any;

@Injectable()
export class Web3Service {
  private web3: any;

  constructor() {
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

    //copy abi from remix compile/details tab
    var testContract = this.web3.eth.contract([
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

    //define contract address from remix run tab after create click
    var test = testContract.at('0xca7226d8af61138b7a4665867608325e65ab9bd6');

    console.log(test);

    test.setInstructor('haim', 3);
    test.getInstructor(function (error, result) {
      if (!error) {
        console.log(result)
      } else {
        console.error(error);
      }
    })
  }

  public creatAccount() {
    let acc = this.web3.eth.personal.newAccount('abc123');
    console.log(acc);
  }

}
