import { Component } from '@angular/core';

import { CATEGORIES } from './components/data/products-data';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList],
  template: `
    <header>
      <h1>My Online Store</h1>
      <nav class="categories">
        @for (cat of categories; track cat.id) {
          <button 
            [class.active]="selectedCategoryId === cat.id"
            (click)="selectCategory(cat.id)">
            {{ cat.name }}
          </button>
        }
      </nav>
    </header>

    <main>
      @if (selectedCategoryId) {
        <app-product-list [categoryId]="selectedCategoryId" />
      } @else {
        <p class="welcome">Пожалуйста, выберите категорию, чтобы увидеть товары.</p>
      }
    </main>
  `,
  styleUrls: ['./app.css']
})
export class App {
  categories = CATEGORIES;
  selectedCategoryId: number | null = null;

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }
}