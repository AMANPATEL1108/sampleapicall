import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Products {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.apiUrl);
  }
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  // add other fields if you want
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
