import { Component, OnInit } from '@angular/core';
import{User} from '../model/user';
import{UserService} from '../services/user.service';
import{Router} from '@angular/router';
//permit navegar hasta otro 

@Component({
  selector: 'umss-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
 userList: User[] = [];

      constructor(
        private userservice: UserService,
        private router:Router) { }
     
  ngOnInit() {
    this.userservice.getUserList()
     //funcion del exito y funcion del fracaso
    .subscribe(
      (response)=>{
        //console.log('respuesta del servisor',response);
        this.userList=response.data;
      },(error)=>{
        console.log('Error', error);
      }
    );
  
  }
  viewUser(userId):void{
    //console.log('id del usuario');
    this.router.navigate(['user',userId,'view']);
  }

}
