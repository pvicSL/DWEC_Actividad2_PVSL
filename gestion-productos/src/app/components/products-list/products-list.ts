import { Component } from '@angular/core';
import { ProductService, Product } from '../../services/product';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  productos: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.cargarProductos().subscribe(datos => {
      this.productos = datos;
      console.log('Productos recibidos:', datos);
    });
  }

  onEliminar(id: string) {
  console.log('Producto a eliminar:', id);
  // Aquí luego llamaremos al servicio
}
}
