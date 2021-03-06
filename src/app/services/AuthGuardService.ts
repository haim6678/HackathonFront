import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {PermissionService} from "./PermissionService";


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private routh: Router,
              private permissions: PermissionService) {
  }


  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.permissions.checkIfUserAuthorized();
  }
}
