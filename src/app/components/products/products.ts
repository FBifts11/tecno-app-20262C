import { Component, inject, signal } from '@angular/core';
import { Producto } from '../../models/product';
import { ProductService } from '../../services/product-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  
  readonly productos = signal<Producto[]>([])
  private readonly _productoService = inject(ProductService)
  
  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos() {
    this._productoService.obtenerProductosService().subscribe({
      next: data => this.productos.set(data),
      error: error => console.log(error)
    })
  }
}
