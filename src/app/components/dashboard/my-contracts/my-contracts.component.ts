import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-my-contracts',
  templateUrl: './my-contracts.component.html',
  styleUrls: ['./my-contracts.component.css']
})
export class MyContractsComponent implements OnInit {

  modalRef: BsModalRef;
  signedContract: { contract: File, contractName: string, sellers: string[], buyers: string[] }[] = [];
  unSignedContract: { contract: File, contractName: string, sellers: string[], buyers: string[] }[] = [];
  contractForModal: { contract: File, contractName: string, sellers: string[], buyers: string[] };

  constructor(private modalService: BsModalService) {
    this.signedContract.push({
      contract: null,
      contractName: 'haim',
      sellers: ['gay', 'big gay'],
      buyers: ['small gay', 'hitler']
    });
    this.signedContract.push({
      contract: null,
      contractName: 'daniel',
      sellers: ['gay', 'big gay'],
      buyers: ['small gay', 'hitler']
    });

    this.unSignedContract.push({
      contract: null,
      contractName: 'alon',
      sellers: ['gay', 'big gay'],
      buyers: ['small gay', 'hitler']
    });
    this.unSignedContract.push({
      contract: null,
      contractName: 'or',
      sellers: ['gay', 'big gay'],
      buyers: ['small gay', 'hitler']
    });
  }

  openModal(template: TemplateRef<any>, index, arr) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, {class: 'gray modal-lg'})
    );

    if (arr == 'signed') {
      this.contractForModal = this.signedContract[index];
    } else {
      this.contractForModal = this.unSignedContract[index];
    }
  }

  onOpenModalForSign(index) {


  }

  ngOnInit() {
  }

}
