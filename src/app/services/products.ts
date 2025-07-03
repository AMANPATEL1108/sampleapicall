import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Products {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<string> {
    
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
