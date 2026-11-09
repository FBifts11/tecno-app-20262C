import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'products',
        loadComponent: () =>
            import('./components/products/products')
                .then(m => m.Products)
    },
    {
        path: 'products/create',
        loadComponent: () =>
            import('./components/product-create/product-create')
                .then(m => m.ProductCreate)
    },
    {
        path:'products/:id',
        loadComponent: ()=>
            import('./components/product-detail/product-detail')
        .then(m => m.ProductDetail)
    },
    {
        path: 'contact',
        loadComponent: ()=>
            import('./components/contact/contact')
        .then(m => m.Contact)
    },
    {
        path:'products/:id/update-put',
        loadComponent:()=>
            import('./components/product-update-put/product-update-put')
        .then(m=> m.ProductUpdatePut)
    },
    {
        path:'products/:id/update-patch',
        loadComponent: ()=>
            import('./components/product-update-patch/product-update-patch')
        .then(m =>m.ProductUpdatePatch)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
