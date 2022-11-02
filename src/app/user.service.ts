import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient:HttpClient) { }
  getdetails():Observable<any>
  {
    return this._HttpClient.get('https://fakestoreapi.com/products?limit=10')
  }
}
