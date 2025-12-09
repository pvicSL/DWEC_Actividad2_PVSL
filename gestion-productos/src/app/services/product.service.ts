import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'https://api.npoint.io/1dee63ad8437c82b24fe';

  private productosSubject = new BehaviorSubject<Product[]>([]);
  productos$ = this.productosSubject.asObservable();

  private productosOriginales: Product[] = [];

  constructor(private http: HttpClient) { }

  cargarProductos() {
    this.http.get<Product[]>(this.url).subscribe({
      next: (productos) => {
        this.productosOriginales = productos;
        this.productosSubject.next(productos);
      },
      error: (err) => console.error('Error al cargar productos:', err)
    });
  }

  agregarProducto(datos: any) {

    const nuevoProducto: Product = {
      _id: crypto.randomUUID(),
      name: datos.name,
      description: datos.description,
      price: datos.price,
      category: datos.category,
      image: datos.image,
      active: datos.active
    };

    // Añadimos el nuevo producto al principio de la lista
    this.productosOriginales = [nuevoProducto, ...this.productosOriginales];

    // Emitimos la nueva lista para que Angular actualice la vista
    this.productosSubject.next(this.productosOriginales);
  }

  eliminarProducto(id: string) {
    this.productosOriginales = this.productosOriginales.filter(p => p._id !== id);
    this.productosSubject.next(this.productosOriginales);
  }

}
