import { Component, input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item';
import { PRODUCTS } from '../data/products-data';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  template: `
    <div class="product-grid">
      @for (item of filteredProducts; track item.id) {
        <app-product-item [product]="item" (remove)="onRemoveProduct($event)" />
      } @empty {
        <p>В этой категории пока нет товаров.</p>
      }
    </div>
  `,
  styleUrls: ['./product-list.css']
})
export class ProductList {
  categoryId = input.required<number>();
  allProducts = [...PRODUCTS]; // Копия данных для удаления

  get filteredProducts() {
    return this.allProducts.filter(p => p.categoryId === this.categoryId());
  }

  onRemoveProduct(id: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== id);
  }
}