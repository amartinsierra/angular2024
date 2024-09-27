import { Component, OnInit } from '@angular/core';
import { MisReservasService } from '../../service/mis-reservas.service';
import { Reserva } from '../../model/Reserva';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrl: './mis-reservas.component.css'
})
export class MisReservasComponent implements OnInit{
  reservas:Reserva[];
  constructor(private misReservasService:MisReservasService,
    private menuComponent:MenuComponent,
    private router:Router){

  }
  ngOnInit(): void {
    this.mostrarReservas();
  }
  mostrarReservas():void{
    console.log(this.menuComponent.cliente.usuario);
    this.misReservasService
      .recuperar(this.menuComponent.cliente.usuario)
      .subscribe(data=>this.reservas=data);
  }
  salir():void{
    this.menuComponent.enabledActions=false;
    this.menuComponent.enabledEnter=true;
    this.router.navigate(["/reservar"]);
  }
}
