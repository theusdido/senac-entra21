import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendenteComponent } from './cadastro/atendente/atendente.component';

const routes: Routes = [
  {path:'atendente' , component:AtendenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
