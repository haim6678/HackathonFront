import {isNullOrUndefined} from "util";

export class PermissionService {


  storageObj = sessionStorage;
  userKeyInStorage = 'currentUser';

  checkIfUserAuthorized() {

    let token = JSON.parse(this.storageObj.getItem(userKeyInStorage)).token;
    return !isNullOrUndefined(token) && token !== '';
  }

  setCurrentUser(token: string) {
    this.storageObj.setItem(userKeyInStorage, JSON.stringify({token: token}));
  }
}
