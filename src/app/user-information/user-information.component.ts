import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'umss-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  myUser:User = {
    name:'',
    lastname:'',
    username:'',
    email:''
  };
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.authservice.getMyPersonalInformation()
    .subscribe(
      (response)=>{
        console.log('Respuesta: ',response);
        this.myUser= response.data;
      },(error)=>{
        console.log('Error: ', error);
      }
    );
  }

}
