import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota } from './note';
@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  url:string = "http://localhost/tareaPendiente/backend/";

  constructor(private servicio:HttpClient) { }

  guardarDatos(listaNotas:Array<Nota>):Observable<any>{
    return this.servicio.post(`${this.url}guardarDatos.php`, JSON.stringify(listaNotas));
  }

  recibirDatos():Observable<any>{
    return this.servicio.get(`${this.url}recibirDatos.php`);
  }

}
