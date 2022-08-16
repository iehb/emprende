import { Component, OnInit,HostBinding  } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

  eventos: any=[];
  @HostBinding('class') classes= 'row';
  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.getEventos();
  }

  getEventos(){
    this.eventosService.getEventos().subscribe(
      resp=> {
        this.eventos =resp;
      },
      err=> console.error(err)
    );
  }
  deleteEvento(Id_Actividad : number){
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
