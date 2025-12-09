import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from './services/product.service';
import { ProductsList } from './components/products-list/products-list';
import { ProductFormComponent } from './components/product-form/product-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProductsList, ProductFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestion-productos');

  constructor(private productService: ProductService) {
    this.productService.cargarProductos();
    //this.productService.cargarProductos().subscribe(
    //(datos: Product[]) => {
    //console.log('Productos cargados desde la API:', datos);
    //}
    //);
  }

  onProductoCreado(producto: any) {
    this.productService.agregarProducto(producto);
  }

}
