import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './services/products';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'sampeapicall';

  message: string = '';

  constructor(private userService: Products) {}
  ngOnInit() {
    this.userService.getProducts().subscribe((data) => (this.message = data));
  }
}
