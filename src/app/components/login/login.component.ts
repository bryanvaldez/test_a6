import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Types } from 'src/app/constants/types.constant';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { CreateComponent } from 'src/app/components/modal/user/create/create.component';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  message: String = "";
  private user: User;

  

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private _userService: UserService
    ) { 
      this.user = {
        'SApaterno': '', 
        'SAmaterno': '', 
        'SNombres': '',
        'SMail': '', 
        'SDireccion': '', 
        'STmovil': '',
      };

     }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }
  login() {
    const url = 'http://localhost:8080/login';
    const data = {'userName': this.model.username, 'password': this.model.password};
    const hdrs = new HttpHeaders({'Content-Type':'application/json'});

    this.http.post<HttpResponse<any>>(url, data, { headers: hdrs, observe: 'response'} )
    .subscribe(
      (data: HttpResponse<any>) => {
        console.log("fsdfsd");
        sessionStorage.setItem('token', data.headers.get('authorization'));
        this.router.navigate(['main']);
      }, 
      error =>{
        console.log("Usuario y/o Contrasea incorrecta");
        this.message = "Usuario y/o Clave incorrecta.";
      }
    );
   }

   clean(){
      this.message = "";
   }

   iModal(type){
    switch (type) {
      case Types.M_USER_CREATE: 
          this.openDialog();
        break;
      case Types.M_PASS_FORGOT:        
        break;    
      case Types.M_PASS_CHANGE:        
        break;        
      case Types.M_CLOSE:        
        break; 
    }
   }

   openDialog(): void {
    let dialogRef = this.dialog.open(CreateComponent, {
      width: '700px',
      data: {
        SApaterno : this.user.SApaterno,
        SAmaterno : this.user.SAmaterno, 
        SNombres : this.user.SNombres,
        SMail : this.user.SMail, 
        SDireccion : this.user.SDireccion,
        STmovil : this.user.STmovil  
      }
    });
    dialogRef.afterClosed().subscribe(data => {  
      this._userService.save(data);            
    });
  }   

}