import { Component, OnInit } from '@angular/core';
import { AtendenteService } from 'src/app/service/atendente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atendente',
  templateUrl: './atendente.component.html',
  styleUrls: ['./atendente.component.css']
})
export class AtendenteComponent implements OnInit {

  public dados:any = {id:0,nome:''};

  public field_form = '';
  constructor(
    public atendente_service:AtendenteService,
    public router:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params:any) => {
        if (params.id != undefined){
          this.atendente_service.editar(params.id)
          .subscribe(
            (response:any) => { this.dados = response } 
          );
        }
      }
    );
  }

  salvar(){
    
    if (this.dados.nome == ''){
      this.field_form = 'field-error';
      return;
    }

    this.atendente_service.salvar(this.dados)
    .subscribe(
      (response:any) => {
        this.dados.id = response;
      }
    );
  }
}
