import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PermissionService} from "../../services/PermissionService";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  public href: string = "";

  get userAuthorized(): boolean {
    return this.permi.checkIfUserAuthorized();
  }

  constructor(private router: Router
    , private permi: PermissionService) {
  }

  logOut() {
    this.permi.removeUser();
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
