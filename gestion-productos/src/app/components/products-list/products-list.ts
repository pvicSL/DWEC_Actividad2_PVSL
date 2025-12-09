import { Component} from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-products-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  productos: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.productos$.subscribe(productos => {
      this.productos = productos;
      console.log('Productos recibidos:', productos);
    });
  }

  onEliminar(id: string) {
    console.log('Producto a eliminar:', id);
    // Aquí luego llamaremos al servicio
  }
}
