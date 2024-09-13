import { Component } from '@angular/core';
import { LibreriaService } from '../../service/libreria.service';
import { Book } from '../../model/Book';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css'
})
export class LibreriaComponent {
  min:number;
  max:number;
  books:Book[];
  constructor(private libreria:LibreriaService){

  }

  buscar():void{
    this.libreria.librosPorPrecio(this.min,this.max).subscribe(data=>this.books=data);
  }

}
