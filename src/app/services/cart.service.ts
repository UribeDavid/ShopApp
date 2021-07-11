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

  deleteOrder(id: string) {
    return this.firestore.collection('carts').doc(id).delete();
  }

  getAllProductsCart() {
    return this.firestore.collection('product_cart').snapshotChanges();
  }

  getProductsByCart(id: string) {
    return this.firestore.collection('product_cart', ref => ref.where('cart_id', '==', id)).snapshotChanges();
  }

  addProductCart(product: Product_Cart) {
    return this.firestore.collection('product_cart').add(product);
  }

  deleteCartProduct(id: string) {
    return this.firestore.collection('product_cart', ref => ref.where('cart_id', '==', id)).doc().delete();
  }

}
