import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import {ServiceService} from '../../services/service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(private service: ServiceService) {
  }

  student = new Student();
  selectedFile: File;

  ngOnInit(): void {
    this.getStudents();
  }

  // tslint:disable-next-line:typedef
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.student.base64 = reader.result.toString().substring(22, reader.result.toString().length);
    };
    reader.onerror = function(error) {
      console.log('Error: ', error);
    };
  }

  // tslint:disable-next-line:typedef
  regitrar(form: NgForm) {
    this.student.nombre = form.value.nombre;
    this.student.foto = form.value.nombre + 'png';
    this.student.tipo = 'png';

    this.service.postStudent(this.student).subscribe(res => {
      console.log(res);
    });
    this.getStudents();

    form.resetForm();
  }

  getStudents(){
    this.service.getStudents().subscribe(res => {
      console.log(res);
    });
  }
}
