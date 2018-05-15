import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-contract-modal',
  templateUrl: './contract-modal.component.html',
  styleUrls: ['./contract-modal.component.css']
})
export class ContractModalComponent implements OnInit {

  @Input() contractInfo: { contract: File, contractName: string, sellers: string[], buyers: string[] };


  constructor() {
  }

  ngOnInit() {
  }

}
