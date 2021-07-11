import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NzNotificationService } from 'ng-zorro-antd/notification';

import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-modal-manage-product',
  templateUrl: './modal-manage-product.component.html',
  styleUrls: ['./modal-manage-product.component.css']
})
export class ModalManageProductComponent implements OnInit, OnDestroy {

  @Input() isVisible: boolean = false;
  isLoading: boolean = false;
  @Input() data: Product = null;
  @Output() public closed = new EventEmitter<boolean>();
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private _nzNotificationService: NzNotificationService,
              private _productsService: ProductsService) {
  }
  
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.productForm = this.formBuilder.group({
      nombre: [this.data?.nombre || null, [Validators.required]],
      sku: [this.data?.sku || null, [Validators.required]],
      descripcion: [this.data?.descripcion || null, [Validators.required]]
    });
  }

  handleOk() {
    this.data ? this.editProduct() : this.addProduct();
  }

  addProduct() {
    this.isLoading = true;
    this._productsService.addProduct(this.productForm.value)
        .then( (data) => {
          this.isLoading = false;
          this.isVisible = false;
          this.closed.emit(false);
          this._nzNotificationService.success('¡Operación Exitosa!', 'Se ha creado el producto correctamente');
        })
        .catch( (err) => {
          console.log(err);
          this.isLoading = false;
          this._nzNotificationService.error('¡Error!', 'Ha ocurrido un error al crear el producto');
        });
  }

  editProduct() {
    this.isLoading = true;
    this._productsService.updateProduct(this.data.id, this.productForm.value)
        .then( () => {
          this.isLoading = false;
          this.isVisible = false;
          this.closed.emit(false);
          this._nzNotificationService.success('¡Operación Exitosa!', 'Se ha editado el producto correctamente');
        })
        .catch( (err) => {
          console.log(err);
          this.isLoading = false;
          this._nzNotificationService.error('¡Error!', 'Ha ocurrido un error al crear el producto');
        });
  }

  handleCancel() {
    this.isVisible = false;
    this.closed.emit(false);
  }

  ngOnDestroy() {}

}
