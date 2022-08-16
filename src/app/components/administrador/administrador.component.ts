
import { Component, OnInit, HostBinding } from '@angular/core';
import {RegistroActividadesEvento} from '../../models/Eventos';
import { EventosService } from 'src/app/services/eventos.service';
import { Router } from '@angular/router';
import { ActivatedRoute,Route } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';





@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})

export class AdministradorComponent implements OnInit {
  @HostBinding ('class') classes='row';
  eventos: RegistroActividadesEvento={
    Id_Actividad: 0,
    Nombre_Actividad: '',
    Fecha_Actividad:new Date(),
    Hora_Inicio:'' ,
    Hora_Termino: '',
    Cantidad_Asistentes: 0,
    Lugar: '',
    id_TipoActividad: 0,
    Nombre_Responsable: '',
    Nombre_Participante: '' 
  }

  edit :boolean =false;


constructor( private eventosService:EventosService, private router:Router,private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   
    const params=this.activedRoute.snapshot.params;
    if(params ['Id_Actividad']){
      this.eventosService.getEvento(params['Id_Actividad']).subscribe(
      resp =>{
        console.log(resp);
        this.eventos=resp;
        this.edit=true;

      },
      err=>console.error(err)
      );
  }
}

saveNewEvento(){
  delete this.eventos.Id_Actividad;
 
  this.eventosService.saveEvento(this.eventos).subscribe(
    resp=>{
      console.log(resp);
      this.router.navigate(['eventos']);
    },
    err => console.error(err)

  );
  console.log(this.eventos);
}

updateEvento(){
  delete this.eventos.Id_Actividad;
 
  let number : number= Number(this.eventos.Id_Actividad);
  this.eventosService.updateEvento(number,this.eventos).subscribe(
    resp=>{
      console.log(resp);
      this.router.navigate(['eventos']);
    },
    err=>console.error(err)
  );
}


getEventos(){
  this.eventosService.getEventos().subscribe(
    resp=> {
      this.eventos =resp;
    },
    err=> console.error(err)
  );
}



deleteEventos(Id_Actividad : number){
  console.log(Id_Actividad);
  this.eventosService.deleteEvento(Id_Actividad).subscribe(
    resp=>{
      console.log(resp);
      this.getEventos();
    },
    err=>console.error(err)
      );
}


}

  


