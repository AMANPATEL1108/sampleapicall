import { Component, OnInit } from '@angular/core';
import { Product, Products } from './services/products';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor], // 👈 this line enables *ngFor
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  title = 'sampleapicall';

  products: Product[] = [];

  constructor(private productService: Products) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.products;
    });
  }
}
