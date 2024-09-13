import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PASS, USER } from '../custom_properties';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(private http:HttpClient){

  }

  buscar(tematica:string):Observable<Resultado[]>{
    let url:string="http://localhost:9000/buscar/"+tematica;
    return this.http.get<Resultado[]>(url);
  }

  alta(resultado:Resultado):Observable<string>{
    console.log("llamado a alta en service")
    let url:string="http://localhost:9000/alta";
    //supongmaos que el recurso está securizado y solo un usuario autorizado puede acceder
    let codificado=btoa(USER+":"+PASS); //codifica un texto en base64
    //creación de encabezados
    let heads=new HttpHeaders();
    heads=heads.set("Authorization","Basic "+codificado);
    return this.http.post<string>(url,resultado,{headers:heads});

  }
  buscarurl(url:string):Observable<Resultado>{
    let pars=new HttpParams();
    pars=pars.set("url",url);
    let urlbase:string="http://localhost:9000/buscar";
    return this.http.get<Resultado>(urlbase,{params:pars});

  }
}
