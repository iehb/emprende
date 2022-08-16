import { AdministradorListComponent } from './components/administrador-list/administrador-list.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AsistentesComponent } from './components/asistentes/asistentes.component';
import { LoginComponent } from './components/login/login.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { EmprendeComponent } from './components/emprende/emprende.component';


const routes: Routes = [
  {path: 'home', component:EmprendeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'administrador', component:AdministradorComponent},
  {path: 'participantes', component:ParticipantesComponent},
  {path: 'asistente', component:AsistentesComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'administrador-list', component:AdministradorListComponent},
  //{path: 'eventos/add',component: AdministradorComponent},
  {path: 'eventos/edit/:id', component:AdministradorComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
