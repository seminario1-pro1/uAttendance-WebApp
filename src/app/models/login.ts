export class Login {
  nombre: string;
  contrasena: string;
  foto: string;
  tipo: string;
  constructor(nombre= '', contrasena= '', foto= '', tipo = '' ) {
    this.nombre = nombre;
    this.contrasena = contrasena;
    this.foto = foto;
    this.tipo = tipo;
  }
}
