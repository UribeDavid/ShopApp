import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { 
    path: 'products',
    component: PagesComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('./products/products.module').then( m => m.ProductsModule)
      },
    ]
  },
  {
    path: 'cart',
    component: PagesComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('./cart/cart.module').then( m => m.CartModule)
      },
    ]
  },
  {
    path: 'orders',
    component: PagesComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('./orders/orders.module').then( m => m.OrdersModule)
      },
    ]
  },
  {
    path: '', 
    redirectTo: '/auth',
    pathMatch: 'full'
  },
];

export const PagesRoutes = RouterModule.forChild(routes);
