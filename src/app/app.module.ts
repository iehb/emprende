import { NuevoComponent } from './components/nuevo/nuevo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { AsistentesComponent } from './components/asistentes/asistentes.component';
import { LoginComponent } from './components/login/login.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EmprendeComponent } from './components/emprende/emprende.component';
import { LateralAsistenteComponent } from './components/lateral-asistente/lateral-asistente.component';
import { LateralParticipanteComponent } from './components/lateral-participante/lateral-participante.component';
import { LateralAdministradorComponent } from './components/lateral-administrador/lateral-administrador.component';
import { LateralEvaluadorComponent } from './components/lateral-evaluador/lateral-evaluador.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AdministradorListComponent } from './components/administrador-list/administrador-list.component';
import { EventosService } from './services/eventos.service';



@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    ParticipantesComponent,
    AsistentesComponent,
    LoginComponent,
    NavegacionComponent,
    PiePaginaComponent,
    RegistroComponent,
    EmprendeComponent,
    LateralAsistenteComponent,
    LateralParticipanteComponent,
    LateralAdministradorComponent,
    LateralEvaluadorComponent,
    NuevoComponent,
    AdministradorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
   // {provide: LocationStrategy, useClass: HashLocationStrategy}
   EventosService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
