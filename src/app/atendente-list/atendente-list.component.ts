import { Component, OnInit } from '@angular/core';
import { AtendenteService } from '../service/atendente.service';

@Component({
  selector: 'app-atendente-list',
  templateUrl: './atendente-list.component.html',
  styleUrls: ['./atendente-list.component.css']
})
export class AtendenteListComponent implements OnInit {
  public dados:Array<any> = [];
  constructor(
    public atendente_service:AtendenteService
  ) { }

  ngOnInit(): void {
    this.atendente_service.listar()
    .subscribe(
      (response:any) => { this.dados = response } 
    );
  }

}
