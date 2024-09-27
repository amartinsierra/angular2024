import { Component, OnInit } from '@angular/core';
import { ReservarService } from '../../service/reservar.service';
import { Router } from '@angular/router';
import { Hotel } from '../../model/Hotel';
import { Vuelo } from '../../model/Vuelo';
import { Reserva } from '../../model/Reserva';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrl: './reservar.component.css'
})
export class ReservarComponent implements OnInit{
  destinos:string[];
  destinoElegido:string;

  hoteles:Hotel[];
  vuelos:Vuelo[];
  plazasReservar:number;
  reserva:Reserva;
  constructor(private reservarService:ReservarService,
    private menuComponent:MenuComponent,
    private router:Router){

  }
  ngOnInit(): void {
    this.reserva=new Reserva();
    this.reserva.hotel=new Hotel();
    this.reserva.vuelo=new Vuelo();
    this.cargarLocalizaciones();
  }
  cargarLocalizaciones():void{
    this.reservarService.localizaciones().subscribe(data=>this.destinos=data);
  }
  cargarHoteles():void{
    this.reservarService.hoteles(this.destinoElegido).subscribe(data=>this.hoteles=data);
  }
  cargarVuelos():void{
    this.reservarService.vuelos(this.destinoElegido,this.plazasReservar).subscribe(data=>this.vuelos=data);
  }

  reservar():void{
    this.reserva.usuario=this.menuComponent.cliente.usuario;
    this.reservarService.reservar(this.reserva,this.plazasReservar).subscribe();
  }

}
