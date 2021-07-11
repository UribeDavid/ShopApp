import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ChangeAmount, Delete } from '../../states/cart-state/actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[] = [];
  isLoading: boolean = false;

  constructor(private store: Store<{ cartState: Array<Product> }>,
              private _cartService: CartService) { 
    this.getCartProducts();
  }
  
  ngOnInit() {
  }
  
  getCartProducts() {
    this.store.select(state => state.cartState).subscribe((products: Array<Product>) => {
      this.products = products;
    });
  }

  async saveCart () {
    this.isLoading = true;
    try {

      const resultSaveCart:any = await this._cartService.addOrder({status: 'pending'});

      this.products.forEach( async prod => {
        await this._cartService.addProductCart({
          cart_id: resultSaveCart.id,
          product_id: prod.id,
          quantity: prod.quantity,
        });
      });

      this.products.forEach( async prod => {
        this.deleteProduct(prod.id);
      });

      this.isLoading = false;

    } catch (error) {
      this.isLoading = false;
    }

  }
  
  changeQuantityProduct(id: string, increase: boolean) {
    this.store.dispatch(ChangeAmount({id, increase}));
  }

  deleteProduct(id: string) {
    this.store.dispatch(Delete({id}));
  }


}
