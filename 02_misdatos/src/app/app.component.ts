import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre:string;
  edad:number;
  texto:string;

  mostrar():void{
    this.texto="Te llamas "+this.nombre+" y tienes "+this.edad+" años";
  }
}
