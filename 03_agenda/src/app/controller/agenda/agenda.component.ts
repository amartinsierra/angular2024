import { Component } from '@angular/core';
import { Contacto } from '../../model/Contacto';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  //almacena los contactos creados
  agenda:Contacto[]=[];
  //estas variables se vinculan con los campos de texto
  //para recoger la entrada de usuario
  nombre:string;
  edad:number;
  telefono:string;
  //respuesta al evento guardar
  guardar():void{
    this.agenda.push(new Contacto(this.nombre,this.edad,this.telefono));
  }

}
