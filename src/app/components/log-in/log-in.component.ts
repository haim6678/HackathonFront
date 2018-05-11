import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email = '';
  password = '';
  registerEmail = '';
  registerName = '';
  registerPassword = '';
  registerReEnterPassword = '';

  action;

  constructor(private router: Router,
              private routeManager: ActivatedRoute) {
  }

  navigate(value) {
    this.action = value;
  }


  ngOnInit() {

    this.action = this.routeManager.snapshot.params['action'];
    this.routeManager.params.subscribe(
      (param: Params) => {
        this.action = param['action'];
      }
    );
  }

  onRegister(){

    this.router.navigate(['']);
  }

  onLogIn() {

    this.router.navigate(['']);
  }
}
