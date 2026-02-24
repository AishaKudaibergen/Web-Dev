import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  template: `
    <div class="card">
      <img [src]="product().image" alt="{{ product().name }}">

      <h3>{{ product().name }}</h3>
      <p>{{ product().description }}</p>
      <p>{{ product().price }} ₸</p>

      <a [href]="product().link" target="_blank">Открыть в Kaspi</a>

      <p>⭐ {{ product().rating }}</p>
      <p>❤️ {{ product().likes }}</p>

      <button (click)="like()">Like</button>
      <button (click)="removeItem()">Delete</button>

<button (click)="shareWA()">Share WA</button>
<button (click)="shareTG()">Share TG</button>
    </div>
  `,
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {

  product = input.required<Product>();
  remove = output<number>();

  like() {
    this.product().likes++;
  }

  removeItem() {
    this.remove.emit(this.product().id);
  }

  shareWA() {
    const url = `https://wa.me/?text=${encodeURIComponent(
      'Посмотри товар на Kaspi: ' + this.product().link
    )}`;
    window.open(url, '_blank');
  }

  shareTG() {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);

    window.open(
      `https://t.me/share/url?url=${url}&text=${text}`,
      '_blank'
    );
  }
}