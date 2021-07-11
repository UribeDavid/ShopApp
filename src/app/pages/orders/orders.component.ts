import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Cart } from 'src/app/models/cart.model';
import { Product_Cart } from 'src/app/models/product_cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Array<Cart> = [];

  constructor(private _cartService: CartService,
              private _nzNotificationService: NzNotificationService) {
    this.getCarts();
  }

  ngOnInit() {
  }

  getCarts() {
    this._cartService.getCarts().subscribe( (data:any) => {
      this.orders = <Array<Cart>>data.map(dat => ({
        ...dat.payload.doc.data(), 
        id: dat.payload.doc.id, 
        products: [], 
        isLoading: false, 
        isComplete: dat.payload.doc.data().status == 'Complete' ? true : false
      }));
      this._cartService.getAllProductsCart().subscribe( (data: any) => {
        const dataTransformed = <Array<Product_Cart>>data.map(dat => ({...dat.payload.doc.data(), id: dat.payload.doc.id}));
        dataTransformed.forEach((product: Product_Cart) => {
          this.orders.forEach((order: Cart) => {
            if (product.cart_id == order.id) order['products'].push(product);
          });
        });
      });
    });
  }

  updateStatus(order: Cart) {
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].id == order.id) {
        this.orders[i].isLoading = true;
        break;
      }
    }
    this._cartService.updateOrder({...order, status: 'Complete' })
        .then(() => {
          for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].id == order.id) {
              this.orders[i].isLoading = false;
              this.orders[i].isComplete = true;
              this.orders[i].status = 'Complete';
              break;
            }
          }
        })
        .catch((err) => {
          for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].id == order.id) {
              this.orders[i].isLoading = false;
              break;
            }
          }
          this._nzNotificationService.error('¡Error!', 'Ocurrió un error al actualizar el estado');
        });
  }

}
