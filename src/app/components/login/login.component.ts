import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Login } from '../../models/login';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogger: Login;
  M: any;
  constructor(private service: ServiceService, private router: Router) { }
  user = {
    nombre: 'jp',
    contrasena: 'jp123',
    foto: ''
  };
  login: boolean;

  ngOnInit(): void {
    this.userLogger = new Login();
  }

  log(userLogin: NgForm): void{
    this.service.postLogin(userLogin.value).subscribe(res => {
      this.router.navigate(['/home']);
    }, error => {
      if (error.status === 400){
        alert('Credenciales Incorrectas.');
      }
    });
    this.resetForm(userLogin);
  }
  resetForm(form: NgForm): void{
    form.reset();
  }
}
