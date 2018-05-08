import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private routh: Router) {
  }


  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }
}
