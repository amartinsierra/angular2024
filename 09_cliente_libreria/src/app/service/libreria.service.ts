import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {

  constructor(private http:HttpClient) { }

  librosPorPrecio(min:number,max:number):Observable<Book[]>{
    let url="http://localhost:11000/slibreria/libreria/librosPorPrecio/"+min+"/"+max;
    return this.http.get<Book[]>(url);
  }
}
