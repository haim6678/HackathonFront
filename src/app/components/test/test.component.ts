import {Component, OnInit} from '@angular/core';
import {Web3Service} from "../../services/web3Service";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {


  constructor(private web3:Web3Service) {
  }

  ngOnInit() {
  }

}
