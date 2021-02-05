import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlanserviceService {


   url2: string = 'https://angular-api-hotel.herokuapp.com/api/planes'
   url:string = 'https://spring-backend-angular.herokuapp.com/planes/'
   private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' }) //tipo de respuesta
   constructor(private _http:HttpClient) { }



   getClientes(){
     return this._http.get(this.url2, {headers: this.httpHeaders});
   }
   getClientesJson(): any {
    return this._http.get<any>(this.url2, {headers: this.httpHeaders});
  }


  getClientesHeroku(){
    return this._http.get(this.url, {headers: this.httpHeaders});
  }
  getClientesJsonHeroku(): any {
   return this._http.get<any>(this.url, {headers: this.httpHeaders});
 }
   getCliente(id:number){
     return this._http.get(this.url+id, {headers: this.httpHeaders});

   }
}
