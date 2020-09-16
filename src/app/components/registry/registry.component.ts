import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ServiceService} from '../../services/service.service';
import {Router} from '@angular/router';
import {Login} from '../../models/login';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  user = new Login();
  constructor(private service: ServiceService, private router: Router) {
  }
  ngOnInit(): void {
  }

  addUser(form: NgForm): void{
    console.log('registro');
  }
}
