import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Product } from 'src/app/models/product.model';

import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  amountProducts: number = 0;

  constructor(private router: Router,
              private store: Store<{ cartState: Array<Product> }>,
              private _nzNotificationService: NzNotificationService,
              private _authService: AuthService) { 
                this.getAmountProducts();
              }

  ngOnInit() {
  }

  getAmountProducts() {
    this.store.select(state => state.cartState).subscribe((products: Array<Product>) => {
      this.amountProducts = products.length;
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  signOut() {
    this._authService.logOut()
        .then(() => {
          localStorage.clear();
          this.router.navigate(['auth']);
        })
        .catch((err) => this._nzNotificationService.error('¡Error!', 'Ocurrió un error al salir de la aplicación'));
  }

}
