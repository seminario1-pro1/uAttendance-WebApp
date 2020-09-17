import {stringify} from '@angular/compiler/src/util';

export class Student {
  nombre: string;
  foto: string;
  tipo: string;
  base64: string;
  url: string;
  constructor(url= '', nombre= '', foto= '', tipo = '', base64 = '') {
    this.nombre = nombre;
    this.foto = foto;
    this.tipo = tipo;
    this.base64 = base64;
    this.url = url;
  }
}
