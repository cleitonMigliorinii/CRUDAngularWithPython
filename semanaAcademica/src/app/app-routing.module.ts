import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GestaoAcademicoComponent } from './gestao-academico/gestao-academico.component';


const routes: Routes = [
  { path : 'home', component: HomeComponent, children :
  [
     { path : 'consultarAcademico', component : GestaoAcademicoComponent }, ]},

  { path : '', pathMatch : 'full', redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
