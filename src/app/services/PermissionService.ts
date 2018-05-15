import {isNullOrUndefined} from "util";

export class PermissionService {


  storageObj = sessionStorage;
  userKeyInStorage = 'currentUser';

  checkIfUserAuthorized() {

    let obj = JSON.parse(this.storageObj.getItem(this.userKeyInStorage));
    return !isNullOrUndefined(obj) && obj.token !== '';
  }

  setCurrentUser(token: string) {
    this.storageObj.setItem(this.userKeyInStorage, JSON.stringify({token: token}));
  }

  removeUser() {
    this.storageObj.removeItem(this.userKeyInStorage);
  }
}
