import { Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
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
  @ViewChild('video', { static: true }) videoElement: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  constraints = {
    video: {
      facingMode: 'environment',
      width: { ideal: 4096 },
      height: { ideal: 2160 }
    }
  };
  videoWidth = 0;
  videoHeight = 0;
  user = new Login();

  constructor(private service: ServiceService, private router: Router, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.startCamera();
  }

  addUser(form: NgForm): void{
    console.log(this.user);
    this.service.postRegistrer(this.user).subscribe(res => {
      console.log(res);
      this.router.navigate(['/home']);
    }, error => {
      if (error.status === 500){
        alert('No se pudo registrar el usuario.');
      }
    });
    this.resert(form);
  }

  startCamera(): void{
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
    } else {
      alert('No se pudo acceder a la camara.');
    }
  }
  handleError(error): void{
    console.log('Error: ', error);
  }
  attachVideo(stream): void {
    this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
    this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
      this.videoHeight = this.videoElement.nativeElement.videoHeight;
      this.videoWidth = this.videoElement.nativeElement.videoWidth;
    });
  }
  capture(): void{
    this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
    this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
    this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);
    const image = this.canvas.nativeElement.toDataURL().toString();
    this.user.foto = image.substring(22, image.length);
    this.user.tipo = 'png';
  }

  resert(form: NgForm): void{
    form.resetForm();
    this.canvas = null;
  }
}
