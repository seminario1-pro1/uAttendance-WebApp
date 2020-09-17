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
  students: Student[];
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
      this.student.foto = reader.result.toString().substring(22, reader.result.toString().length);
      this.student.base64 = reader.result.toString().substring(22, reader.result.toString().length);
    };
    reader.onerror = function(error) {
      console.log('Error: ', error);
    };
  }

  // tslint:disable-next-line:typedef
  regitrar(form: NgForm) {
    this.student.nombre = form.value.nombre;
    this.student.tipo = 'png';
    this.service.postStudent(this.student).subscribe(res => {
      this.getStudents();
      console.log(res);
    }, error => {
      if (error.status === 500){
        alert('No se pudo listar los estudiantes.');
      }
    });
    this.getStudents();

    form.resetForm();
  }

  // tslint:disable-next-line:typedef
  getStudents(){
    this.service.getStudents().subscribe(res => {
      console.log(res);
      this.students = res.Items as Student[];
    }, error => {
      if (error.status === 500){
        alert('No se pudo listar los estudiantes.');
      }
    });
  }
}
