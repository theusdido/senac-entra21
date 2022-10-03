import { Component, OnInit } from '@angular/core';
import { AtendenteService } from '../service/atendente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atendente-list',
  templateUrl: './atendente-list.component.html',
  styleUrls: ['./atendente-list.component.css']
})
export class AtendenteListComponent implements OnInit {
  public dados:Array<any> = [];
  constructor(
    public atendente_service:AtendenteService,
    public router:Router  
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.atendente_service.listar()
    .subscribe(
      (response:any) => { this.dados = response } 
    );    
  }
  novo(){
    this.router.navigate(['/atendente/cadastrar']);
  }

  editar(id:number){
    this.router.navigate(['/atendente/' + id]);
  }

  excluir(id:number){
    if (confirm('Tem certeza que deseja excluir ?')){
      this.atendente_service.excluir(id)
      .subscribe( () => this.listar() );
    }
  }
}