import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductService } from '../../services/product.service';

@Component({
  standalone: true,
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;

  constructor(private productService: ProductService) { }

  eliminar() {
    this.productService.eliminarProducto(this.product._id);
  }


}

