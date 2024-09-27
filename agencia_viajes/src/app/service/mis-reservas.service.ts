import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reserva } from '../model/Reserva';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MisReservasService {

  constructor(private http:HttpClient) { }
  recuperar(usuario:string):Observable<Reserva[]>{
    let url="http://localhost:10000/reservas/";
    return this.http.get<Reserva[]>(url+usuario);
  }
}
