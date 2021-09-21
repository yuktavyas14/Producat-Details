import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { Datalist } from './Model/datalist';
import { ProductName } from './Model/product-name';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http:HttpClient ) { }
login(userdata: ProductName):Observable<any>{
  debugger;
     return this.http.post<ProductName>("http://localhost:3000/auth/login", userdata);
   }
   getproduct():Observable<Datalist[]>{
     return this.http.get<Datalist[]>("http://localhost:3000/products");
   }
}





