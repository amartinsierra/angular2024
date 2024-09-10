import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
   completo:Resultado[]=[
    new Resultado("http://www.fnac.es/","libros","Libros y más"),
    new Resultado("http://www.mybook.com/","libros","librería de temas varios"),
    new Resultado("http://www.game.es/","juegos","Juegos variados"),
    new Resultado("http://www.music.es/","música","Lamejor música"),
    new Resultado("http://www.tech.com/","libros","Libros técnicos"),
    new Resultado("http://www.eljuego.es/","juegos","Juegos on-line")
   ];

   tematica:string;
   //guardaremos los resultados de la búsqueda
   resultados:Resultado[];
   buscar():void{
    /*
    for(let r of this.completo){
      if(r.tematica==this.tematica){
        this.resultados.push(r);
      }
    }*/
    this.resultados=this.completo.filter(r => r.tematica === this.tematica);
   }
}
