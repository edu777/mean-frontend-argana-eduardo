import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const authApiUrl = 'http://localhost:3000/auth';

@Injectable()
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  login(credentials): Observable<any>{
    return this.httpclient.post(`${authApiUrl}/login`, credentials);
  };
  getMyPersonalInformation():Observable<any>{

    return this.httpclient.get(`${authApiUrl}/me`);
  };
}
