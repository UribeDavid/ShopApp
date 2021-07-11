import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cart } from '../models/cart.model';
import { Product_Cart } from '../models/product_cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private firestore: AngularFirestore) { }

  getCarts() {
    return this.firestore.collection('carts').snapshotChanges();
  }

  addOrder(cart: Cart) {
    return this.firestore.collection('carts').add(cart);
  }

  updateOrder(order: Cart) {
    return this.firestore.collection('carts').doc(order.id).update({status: order.status});
  }

  getAllProductsCart() {
    return this.firestore.collection('product_cart').snapshotChanges();
  }

  addProductCart(product: Product_Cart) {
    return this.firestore.collection('product_cart').add(product);
  }

}
