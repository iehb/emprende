import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RegistroActividadesEvento } from '../models/Eventos';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class EventosService {
  API_URI = 'http://localhost:3000';
  
  constructor(private http:HttpClient) { }

  getEventos(){
    return this.http.get(`${this.API_URI}/eventos`);
  }

  getEvento( Id_Actividad: number){ 
    return this.http.get(`${this.API_URI}/eventos/${Id_Actividad}`);
  }

  saveEvento(evento: RegistroActividadesEvento){
    return this.http.post(`${this.API_URI}/eventos`,evento);

  }

  deleteEvento(Id_Actividad: number){
    return this.http.delete(`${this.API_URI}/eventos/${Id_Actividad}`);
  }

 updateEvento(Id_Actividad: number , updateEvento:RegistroActividadesEvento):Observable<RegistroActividadesEvento>{
    return this.http.put(`${this.API_URI}/eventos/${Id_Actividad}`,updateEvento);
  }
}
