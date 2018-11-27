import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  // username = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
    ) {  }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }
  login() {
    console.log(this.model.username + '  | ' + this.model.password);

    const url = 'http://localhost:8080/login';
    this.http.post<Observable<boolean>>(url, {
      userName: this.model.username,
      password: this.model.password
    }).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem('token', btoa(this.model.username + ':' + this.model.password));
        this.router.navigate(['home']);
      } else {
        alert('Authentication failed.');
      }
    });
   }

}
