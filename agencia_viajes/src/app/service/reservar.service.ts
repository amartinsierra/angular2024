import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../model/Hotel';
import { Vuelo } from '../model/Vuelo';
import { Reserva } from '../model/Reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservarService {

  constructor(private http:HttpClient) { }

  localizaciones():Observable<string[]>{
    let url="http://localhost:11000/shoteles/destinos";
    return this.http.get<string[]>(url);
  }

  hoteles(destino:string):Observable<Hotel[]>{
    let url="http://localhost:11000/shoteles/hoteles";
    let params=new HttpParams();
    params=params.append("destino",destino);
    return this.http.get<Hotel[]>(url,{params:params});
  }

  vuelos(destino:string, plazasReservar:number):Observable<Vuelo[]>{
    let url="http://localhost:11000/svuelos/vuelos";
    let params=new HttpParams();
    params=params.append("destino",destino);
    params=params.append("reservas",plazasReservar);
    return this.http.get<Vuelo[]>(url,{params:params});
  }
  reservar(reserva:Reserva,plazasReservar:number):Observable<void>{
    let url="http://localhost:11000/sreservas/alta/";
    return this.http.post<void>(url+plazasReservar,reserva);
  }
}
