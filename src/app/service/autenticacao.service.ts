import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService implements CanActivate{

  constructor(
    public http:HttpClient,
    public router:Router
  ) { }

  logon(_login: string, _senha: string) {
    const http_options: any = {
      Headers: new HttpHeaders({
        //'Content-Type': 'application/json',
        //'X-EBAY-API-SITEID': '0',
        //'X-EBAY-API-COMPATIBILITY-LEVEL': '967',
        //'X-EBAY-API-CALL-NAME': 'GetMyeBayBuying',
        'Access-Control-Allow-Origin': '*',
        //'Access-Control-Allow-Headers': 'X-Requested-With, Origin, Content-Type, X-Auth-Token',
        //'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
      }),
    };
    //'http://ws.teia.tec.br:8080/auth',
    //'https://teia.tec.br/post.php',

    let fd = new FormData();
    fd.append('login',_login)
    fd.append('senha',_senha);

    return this.http.post(
      'http://localhost:8080/auth',
      {
        login :_login,
        senha :_senha,
      },
      http_options
    );
  }  

  autenticar(){
    localStorage.setItem('is_auth','true');
  }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    
    let is_auth = JSON.parse(String(localStorage.getItem('is_auth')));
    console.log(is_auth);
    if (is_auth){
      this.router.navigate(['/dashboard']);
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }  
}
