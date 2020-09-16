import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly baseUrl = 'http://3.15.238.156:3000/';
  constructor(private http: HttpClient) { }

 postLogin(login: Login): Observable<any>{
    return this.http.post<any>(this.baseUrl + 'loginCreds', login);
 }

  postLoginPhoto(login: Login): Observable<any>{
    return this.http.post<any>(this.baseUrl + 'loginPhoto', login);
  }

 postRegistrer(user: Login): Observable<any>{
    return this.http.post<any>(this.baseUrl + 'user/registrer', user);
 }
}
