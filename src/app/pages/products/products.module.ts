import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { ProductsRoutes } from './products.routing';
import { ModalManageProductModule } from './components/modal-manage-product/modal-manage-product.module';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { HttpClientModule } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { DeleteFill, EditTwoTone, PlusCircleTwoTone } from '@ant-design/icons-angular/icons';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

// Ant-desing icons
const icons: IconDefinition[] = [ DeleteFill, EditTwoTone, PlusCircleTwoTone ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutes,
    HttpClientModule,
    NzIconModule.forChild(icons),
    NzCardModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzNotificationModule,
    ModalManageProductModule,
    NzEmptyModule,
    NzToolTipModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
