import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Laptop {
  brand: string;
  modelName: string;
  price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>2026 Laptop Store</h1>

    <div *ngFor="let l of laptops">
      {{ l.brand }} - {{ l.modelName }} ({{ l.price }})
    </div>
  `
})
export class AppComponent implements OnInit {
  laptops: Laptop[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Laptop[]>('http://localhost:3000/api/laptops')
      .subscribe({
        next: (data) => this.laptops = data,
        error: (err) => console.error(err)
      });
  }
}