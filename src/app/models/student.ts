export class Student {

  nombre: string;
  foto: string;
  tipo: string;
  base64: string;
  constructor(nombre= '', foto= '', tipo = '', base64 = '') {
    this.nombre = nombre;
    this.foto = foto;
    this.tipo = tipo;
    this.base64 = base64;
  }
}
