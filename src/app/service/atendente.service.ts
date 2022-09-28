import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AtendenteService {
  constructor(
    public http:HttpClient
  ) { }

  salvar(dados:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*'
      })
    };

    return this.http.post(
      'http://localhost:8080/atendente',
      dados,
      httpOptions
    );
  }
  
}
