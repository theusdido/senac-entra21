import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AtendenteService {
  public api:string = 'http://localhost:8080/atendente';
  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin' : '*'
    })
  };

  constructor(
    public http:HttpClient
  ) { }

  salvar(dados:any){
    return this.http.post(
      this.api,
      dados,
      this.httpOptions
    );
  }

  listar(){
    return this.http.get(this.api,this.httpOptions);
  }

  editar(id:number){    
    return this.http.get(this.api + '/' + id,this.httpOptions);
  }

  excluir(id:number){  
    return this.http.delete(this.api + '/' + id,this.httpOptions);
  }  
}
