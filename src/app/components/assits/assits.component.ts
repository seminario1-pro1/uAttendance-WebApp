import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface StudentDetail {
  student: string;
  image: string;
  present: number;
  show: boolean;
}

export interface AssistsDetail {
  assist: string;
  image: string;
  students: StudentDetail[];
  show: boolean;
}

@Component({
  selector: 'app-assits',
  templateUrl: './assits.component.html',
  styleUrls: ['./assits.component.css'],
})
export class AssitsComponent implements OnInit {
  bucketLink: string =
    'https://pro1-images-grupo16.s3.us-east-2.amazonaws.com/';
  assistsDetails: AssistsDetail[];
  gettingData: boolean = true;

  constructor(private httpClient: HttpClient) {
    this.getAssists();
  }

  getAssists(): void {
    this.httpClient
      .get(
        'https://v3jx6tlas9.execute-api.us-east-2.amazonaws.com/prod/obtenerasistencias'
      )
      .subscribe(
        (data: any[]) => {
          this.assistsDetails = [];
          data.forEach((assist) => {
            let students: StudentDetail[] = [];
            assist.students.forEach((studentDetail: any) => {
              students.push({
                student: this.cleanName(studentDetail.student),
                image: this.bucketLink + studentDetail.student,
                present: studentDetail.present,
                show: false,
              });
            });
            this.assistsDetails.push({
              assist: this.cleanName(assist.assist),
              image: this.bucketLink + assist.assist,
              students: students,
              show: false,
            });
          });
          this.gettingData = false;
        },
        () => {}
      );
  }

  cleanName(name: string): string {
    let tmp: any[] = name.split('/');
    let aux: any[] = tmp[1].split('.');
    return aux[0].toString();
  }

  ngOnInit(): void {}
}
