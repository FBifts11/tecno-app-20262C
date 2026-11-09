import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/product';

@Service()
export class ProductService {
    private _url = 'http://localhost:3000/api/productos'
    private readonly _httpClient = inject(HttpClient)

    public obtenerProductosService(): Observable<Producto[]> {
        return this._httpClient.get<Producto[]>(this._url)
    }

    public obtenerProductoPorIdService(id: string | number): Observable<Producto> {
        return this._httpClient.get<Producto>(`${this._url}/${id}`)
    }

    public eliminarProductoService(id: string | number): Observable<Producto> {
        return this._httpClient.delete<Producto>(`${this._url}/${id}`)
    }
}
