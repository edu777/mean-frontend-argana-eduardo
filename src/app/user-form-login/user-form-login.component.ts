import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'umss-user-form-login',
  templateUrl: './user-form-login.component.html',
  styleUrls: ['./user-form-login.component.css']
})
export class UserFormLoginComponent implements OnInit {

  constructor(private authservice: AuthService,
  private router:Router) { }

  credentials={
  username:'',
  password:''
  };

  ngOnInit() {
  }
  login():void{
    //console.log('Credenciales: ', this.credentials);
    this.authservice.login(this.credentials)
    .subscribe(
      (response)=>{
        //console.log('respuesta: ', response);
        sessionStorage.removeItem('token');//el token se gusrda pero hay que recuperar
        sessionStorage.setItem('token',response.token);//hacemos que se guarde en la memmortia del navegador con el sesionstage
        this.router.navigate(['user','information']);
      },(error)=>{
        console.log('Error: ', error );
      }
    );
  }

}
