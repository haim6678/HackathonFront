import {Component, OnInit} from '@angular/core';
import {Web3Service} from "../../services/web3Service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private web:Web3Service) {
  }

  ngOnInit() {
  }

}
