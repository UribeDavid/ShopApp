(self.webpackChunkshopapp=self.webpackChunkshopapp||[]).push([[592],{910:(t,r,e)=>{"use strict";e.d(r,{N:()=>c});var s=e(7716),o=e(1466);let c=(()=>{class t{constructor(t){this.firestore=t}getCarts(){return this.firestore.collection("carts").snapshotChanges()}addOrder(t){return this.firestore.collection("carts").add(t)}updateOrder(t){return this.firestore.collection("carts").doc(t.id).update({status:t.status})}getAllProductsCart(){return this.firestore.collection("product_cart").snapshotChanges()}addProductCart(t){return this.firestore.collection("product_cart").add(t)}}return t.\u0275fac=function(r){return new(r||t)(s.LFG(o.ST))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);