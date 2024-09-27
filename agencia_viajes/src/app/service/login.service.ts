import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(usuario:string,password:string):Observable<Cliente>{
    let url="http://localhost:11000/sclientes/autenticar";
    let params=new HttpParams();
    params=params.append("usuario",usuario);
    params=params.append("password",password);
    return this.http.get<Cliente>(url,{params:params})
  }
}
