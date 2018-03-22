import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import{UserService} from '../services/user.service';

@Component({
  selector: 'umss-user-form-create',
  templateUrl: './user-form-create.component.html',
  styleUrls: ['./user-form-create.component.css']
})
export class UserFormCreateComponent implements OnInit {

  userToCreate: User = {
    name:'',
    lastname:'',
    email:'',
    username:'',
    password:''
  };

  constructor(private userservice:UserService) { }

  ngOnInit() {
  }
  createNewUser():void{
    //console.log('Usuarios a crear', this.userToCreate);
    this.userservice.createUser(this.userToCreate)
    .subscribe(
      (respose)=>{
        console.log('Respuesta del servidor', respose);
      },(error)=>{
        console.log('Error: ', error);
      }
    );
  }
}
