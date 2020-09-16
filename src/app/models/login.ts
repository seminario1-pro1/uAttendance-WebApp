export class Login {
  nombre: string;
  contrasena: string;
  foto: string;
  constructor(nombre= '', contrasena= '', foto= '' ) {
    this.nombre = nombre;
    this.contrasena = contrasena;
    this.foto = foto;
  }
}
