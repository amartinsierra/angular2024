import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../model/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  url:string="http://localhost:9000/paises/";
  constructor(private http:HttpClient){
  }

  continentes():Observable<string[]>{
    return this.http.get<string[]>(this.url+"continentes");
  }

  paises(continente:String):Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url+"paises/"+continente);
  }

}
