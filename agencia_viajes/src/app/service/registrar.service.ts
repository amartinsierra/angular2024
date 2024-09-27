import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http:HttpClient) { }
  registrar(cliente:Cliente):Observable<void>{
    let url="http://localhost:11000/sclientes/registrar";
    return this.http.post<void>(url,cliente);
  }
}
