import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../service/autenticacao.service';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {
  public login: string = 'edilson.bitencourt';
  public senha: string = '123456';
  constructor(
    public autenticacao_service:AutenticacaoService
  ) { }

  ngOnInit(): void {
  }

  entrar() {
    this.autenticacao_service
      .logon(this.login, this.senha)
      .subscribe((res: any) => {
        this.autenticar(res)
      });
  }

  autenticar(is_auth:boolean){
    if (is_auth){
      console.log('=>' + is_auth);
      this.autenticacao_service.autenticar();
      this.success();
    }else{
      this.error();
    }
  }

  success(){}
  error(){}
}
