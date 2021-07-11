import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: AngularFirestore) { }

  getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }

  addProduct(product: any): Promise<any> {
    return this.firestore.collection('products').add(product);
  }

  getProduct(id: string) {
    return this.firestore.collection('products').doc(id);
  }

  updateProduct(id: string, changes) {
    return this.firestore.collection('products').doc(id).update(changes);
  }

  deleteProduct(id: string) {
    return this.firestore.collection('products').doc(id).delete();
  }

}
