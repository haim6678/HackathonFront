import {Component, OnInit} from '@angular/core';
import {Web3Service} from "../../services/web3Service";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {

  age;
  name;

  constructor(private web: Web3Service) {
  }


  ngOnInit() {
  }

  onSub() {

  }
}
