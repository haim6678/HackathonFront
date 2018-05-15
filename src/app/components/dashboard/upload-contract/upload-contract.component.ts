import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-upload-contract',
  templateUrl: './upload-contract.component.html',
  styleUrls: ['./upload-contract.component.css']
})
export class UploadContractComponent implements OnInit {

  file: File = null;
  usersAssignToContract: { userId: string }[] = [{userId: ''}];
  sellerAssignToContract: { sellerId: string }[] = [{sellerId: ''}];
  fileName = 'No file chosen...';
  contractName = '';
  fileStream = null;

  constructor(private  http: HttpClient) {
  }

  ngOnInit() {
  }

  addUser() {
    this.usersAssignToContract.push({userId: ''});
  }

  addSeller() {
    this.sellerAssignToContract.push({sellerId: ''});
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
      this.fileName = this.file.name;
      let myReader: FileReader = new FileReader();

      myReader.onloadend = (e) => {
        this.fileStream = myReader.result;
      };
      myReader.readAsDataURL(this.file);

    }
  }

  validateContractInfo() {
    let emptyUser = true;
    for (let user of this.usersAssignToContract) {
      if (user.userId === '') {
        emptyUser = false;
        break
      }
    }
    return !isNullOrUndefined(this.fileStream) && !isNullOrUndefined(this.file) && emptyUser;
  }

  sendContract() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    //const options = new RequestOptions({headers: headers});
    this.http.post('http://localhost:1337/api/feedbacks/feedbacksInfo', {
      contract: {contract: this.fileStream, fileName: this.fileName},
      users: this.usersAssignToContract
    }, {headers: headers})
      .subscribe(
        (response) => {
        },
        (error) => {

        }
      )
  }
}
