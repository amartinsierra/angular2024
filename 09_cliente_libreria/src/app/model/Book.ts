export class Book{
  titulo:string;
  tematica:string;
  precio:number;
  clasificacion:number;
  constructor(titulo:string,tematica:string,precio:number,clasificacion:number){
    this.titulo=titulo;
    this.tematica=tematica;
    this.precio=precio;
    this.clasificacion=clasificacion;
  }
}
