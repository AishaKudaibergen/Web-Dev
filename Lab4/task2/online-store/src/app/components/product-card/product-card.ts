import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {
  @Input() product!: Product;
  
  currentImageIndex: number = 0;
  isModalOpen: boolean = false;

  openModal(index: number = 0) {
    this.currentImageIndex = index;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  prevImage(event: Event) {
    event.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex > 0) ? 
      this.currentImageIndex - 1 : this.product.images.length - 1;
  }

  nextImage(event: Event) {
    event.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex < this.product.images.length - 1) ? 
      this.currentImageIndex + 1 : 0;
  }

  selectImage(index: number) {
    this.currentImageIndex = index;
  }

  shareWA() {
    const url = `https://wa.me/?text=${encodeURIComponent('Посмотри товар на Kaspi: ' + this.product.link)}`;
    window.open(url, '_blank');
  }

  shareTG() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}