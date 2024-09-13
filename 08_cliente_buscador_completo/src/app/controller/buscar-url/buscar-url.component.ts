import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';
import { BuscadorService } from '../../service/buscador.service';

@Component({
  selector: 'app-buscar-url',
  templateUrl: './buscar-url.component.html',
  styleUrl: './buscar-url.component.css'
})
export class BuscarUrlComponent {
  url:string;
  resultado:Resultado;
  constructor(private buscadorService:BuscadorService){

  }
  buscar():void{
    this.buscadorService.buscarurl(this.url).subscribe(data=>this.resultado=data);
  }
}
