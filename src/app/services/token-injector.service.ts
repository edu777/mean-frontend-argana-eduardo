import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import {Observable} from 'rxjs/observable'

@Injectable()
export class TokenInjectorService implements HttpInterceptor{

  tokenIntercepted;
  constructor() { }
  intercept(request: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    if(sessionStorage.getItem('token')==null)
    this.tokenIntercepted='faketoken';
    else
    this.tokenIntercepted= sessionStorage.getItem('token');
    request = request.clone({
      setHeaders:{
        "auht-access-token": this.tokenIntercepted
      }
    });
    return next.handle(request);
  }
}
