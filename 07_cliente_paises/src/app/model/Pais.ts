export class Pais
{
  nombre:string;
  continente:string;
  capital:string;
  poblacion:number;
  bandera:string;

  constructor(nombre:string,continente:string,capital:string,poblacion:number,bandera:string){
    this.nombre=nombre;
    this.continente=continente;
    this.capital=capital;
    this.poblacion=poblacion;
    this.bandera=bandera;
  }
}
