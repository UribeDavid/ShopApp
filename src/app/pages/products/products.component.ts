import { Component, OnInit, ViewChild } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { NzNotificationService } from 'ng-zorro-antd/notification';

import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { Add } from '../../states/cart-state/actions';
import { ModalManageProductComponent } from './components/modal-manage-product/modal-manage-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  currentProduct: Product = null;
  @ViewChild(ModalManageProductComponent) modalManageProduct: ModalManageProductComponent;
  constructor(private _nzNotificationService: NzNotificationService,
              private store: Store<{ cartState: Array<Product>}>,
              private _productsService: ProductsService) { 
    this.getProducts();
  }

  ngOnInit() {
  }

  getProducts() {
    this._productsService.getProducts().subscribe((data: any) => {
      this.products = data.map(dat => ({...dat.payload.doc.data(), id: dat.payload.doc.id}));
    });
  }

  addProductToCart(product: Product) {
    try {
      this.store.dispatch(Add({product}));
      this._nzNotificationService.create(
        'success',
        '¡Agregado!',
        'Se añadió al carrito',
        {
          nzDuration: 1250,
          nzPlacement: 'bottomRight'
        }
      )
    } catch (error) {
      this._nzNotificationService.error('¡Error!', 'No se pudo agregar al carrito');
    }
  }

  deleteProduct(id: string) {
    this._productsService.deleteProduct(id)
        .then(() => {
          this._nzNotificationService.success('¡Operación Exitosa!', 'Se ha eliminado el producto correctamente');
        })
        .catch((err) => {
          console.log(err);
          this._nzNotificationService.error('¡Error!', 'Ha ocurrido un error al eliminar el producto');
        });
  }

  openProductModal(data?) {
    this.currentProduct = data || null;
    this.modalManageProduct.data = this.currentProduct;
    this.modalManageProduct.isVisible = true;
    this.modalManageProduct.ngOnInit();
  }

  modalClosed(e) {
    this.modalManageProduct.ngOnDestroy();
  }

}
