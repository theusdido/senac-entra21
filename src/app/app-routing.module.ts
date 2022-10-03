import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendenteComponent } from './cadastro/atendente/atendente.component';
import { AtendenteListComponent } from './atendente-list/atendente-list.component';

const routes: Routes = [
  {path:'atendente' , component:AtendenteListComponent},
  {path:'atendente/listar' , component:AtendenteListComponent},
  {path:'atendente/cadastrar' , component:AtendenteComponent},
  {path:'atendente/:id' , component:AtendenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
