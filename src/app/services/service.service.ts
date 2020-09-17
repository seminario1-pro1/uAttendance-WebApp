import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Login } from '../models/login';
import {Student} from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly baseUrl = 'http://lb-uattendance-semi1-2105757266.us-east-2.elb.amazonaws.com:3000/';
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

 getStudents(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'users');
  }

  postStudent(student: Student): Observable<Student[]>{
    return this.http.post<Student[]>(this.baseUrl + 'student/registrer', student);
  }
}

