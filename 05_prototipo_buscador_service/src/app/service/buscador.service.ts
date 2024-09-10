import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  completo:Resultado[]=[
    new Resultado("http://www.fnac.es/","libros","Libros y más"),
    new Resultado("http://www.mybook.com/","libros","librería de temas varios"),
    new Resultado("http://www.game.es/","juegos","Juegos variados"),
    new Resultado("http://www.music.es/","música","Lamejor música"),
    new Resultado("http://www.tech.com/","libros","Libros técnicos"),
    new Resultado("http://www.eljuego.es/","juegos","Juegos on-line")
   ];
  buscar(tematica:string):Resultado[]{
    console.log(tematica)
    return this.completo.filter(r => r.tematica === tematica);
  }
}
