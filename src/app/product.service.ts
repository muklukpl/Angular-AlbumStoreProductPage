import { Injectable } from '@angular/core';
// import {Http, Response} from '@angular/http';

import { HttpClient } from '@angular/common/http'

import 'rxjs/add/operator/map';
import { Album } from './album';
import { Observable } from 'rxjs/Observable';
import { Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) =>  <Album>response);
  }
  getProducts(): Observable<Product[]> {
   return this._http.get(this._productsUrl).map((response) =>  <Product[]>response.json());
  }

}


// private _albumUrl = 'assets/album.json';

// constructor(private _http: HttpClient) { }

// getAlbum(id: number) {
//   console.log('getAlbum');
//   return this._http.get(this._albumUrl);
// }
// return this._http.get(this._albumUrl).map((response) =>  response.json());
