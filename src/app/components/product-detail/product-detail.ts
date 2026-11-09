import { Component, inject, signal } from '@angular/core';
import { Producto } from '../../models/product';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  readonly producto = signal<Producto | null>(null)

  private readonly _productoService = inject(ProductService)
  private readonly _activatedRoute = inject(ActivatedRoute)
  private readonly _router = inject(Router)

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      {
        next: param => this._productoService.obtenerProductoPorIdService(param['id']).subscribe(
          {
            next: data => this.producto.set(data),
            error: error => console.log(error)
          }
        ),
        error: error => console.log(error)
      }
    )
  }

  eliminarProducto() {
    const PRODUCTO = this.producto()
    const ID = PRODUCTO?.id

    if(!ID) {
      return
    }

    const CONFIRMAR = confirm(
      `¿Esta seguro que desea eliminar el producto "${PRODUCTO.nombre}"?`
    )

    if(!CONFIRMAR) {
      return
    }

    this._productoService.eliminarProductoService(ID).subscribe(
      {
        next: (productoEliminado) => {
          console.log(productoEliminado.nombre)
          this._router.navigate(['/products'])
        },
        error: error => console.log(error)
      }
    )
  }
}
