import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email = '';
  password = '';
  registerEmail = '';
  registerLastName = '';
  registerFirstName = '';
  registerPassword = '';
  userPhone = '';
  registerReEnterPassword = '';

  action;

  constructor(private router: Router,
              private routeManager: ActivatedRoute,
              private http: HttpClient) {
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

  onRegister() {

    this.http.post('http://40.115.124.134/api/register', {
      email: this.registerEmail,
      password: this.registerPassword,
      first_name: this.registerFirstName,
      last_name: this.registerLastName,
      phone: this.userPhone
    }).subscribe(
      (response: any) => {

        console.log('success register');
        this.router.navigate(['']);
      },
      (error) => {
        console.error('error register');
      }
    );

  }

  onLogIn() {


    this.http.post('http://40.115.124.134/api/login', {
      email: this.email,
      password: this.password
    }).subscribe(
      (response: any) => {

        console.log('success login');
        this.router.navigate(['']);
      },
      (error) => {
        console.error('error login');
      }
    );

  }
}
