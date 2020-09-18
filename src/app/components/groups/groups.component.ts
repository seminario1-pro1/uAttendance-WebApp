import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

export interface Assistance {
  name: string;
  photo: string;
}

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent implements OnInit {
  model: NgbDateStruct;
  date: { year: number; month: number };
  currentGroupImage: string = 'assets/default-avatar.png';
  selectedImage: any;
  assistances: Assistance[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getAssistsPhotos();
  }

  onImageSelect(event: any): void {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.currentGroupImage = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
  }

  async addGroupImage(): Promise<void> {
    if (this.model && this.selectedImage) {
      try {
        const date =
          this.model.day.toString() +
          this.model.month.toString() +
          this.model.year.toString();
        const image64 = await this.toBase64(this.selectedImage);
        this.addAssistPhoto(date, image64.substring(22, image64.length));
      } catch (error) {}
    }
  }

  toBase64(selectedImage: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      reader.onload = function () {
        resolve(reader.result.toString());
      };
      reader.onerror = function (error) {
        reject(error);
      };
    });
  }

  addAssistPhoto(name: string, photo: string): void {
    this.httpClient
      .post(
        'https://v3jx6tlas9.execute-api.us-east-2.amazonaws.com/prod/registrarfotogrupal',
        { name: name, photo: photo }
      )
      .subscribe(
        () => {
          this.getAssistsPhotos();
        },
        () => {}
      );
  }

  getAssistsPhotos(): void {
    this.httpClient
      .get(
        'https://v3jx6tlas9.execute-api.us-east-2.amazonaws.com/prod/obtenerfotosgrupales'
      )
      .subscribe(
        (data) => {
          this.assistances = [];
          data['Items'].forEach((assistance) => {
            const assitanceInfo: Assistance = {
              name: assistance.nombre.S,
              photo: assistance.foto.S,
            };
            this.assistances.push(assitanceInfo);
          });
        },
        () => {}
      );
  }
}
