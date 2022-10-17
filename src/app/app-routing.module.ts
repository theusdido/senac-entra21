import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogonComponent } from './logon/logon.component';
import { AutenticacaoService } from './service/autenticacao.service';

const routes: Routes = [
  {path:'logon' , component:LogonComponent,canActivate:[AutenticacaoService]},
  {path:'dashboard', component:DashboardComponent, canActivate:[AutenticacaoService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
