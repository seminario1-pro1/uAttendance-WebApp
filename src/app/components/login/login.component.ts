import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ServiceService) { }
  user = {
    nombre: 'jp',
    contrasena: 'jp123',
    foto: ''
  };
  login: boolean;

  ngOnInit(): void {
    this.service.postLogin(this.user).subscribe(res => {
      console.log(res);
    });
  }
}
