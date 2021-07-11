import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalManageProductComponent } from './modal-manage-product.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ReactiveFormsModule } from '@angular/forms';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { UserOutline } from '@ant-design/icons-angular/icons';

// Ant-desing icons
const icons: IconDefinition[] = [ UserOutline ];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NzIconModule.forChild(icons),
    NzModalModule,
    NzInputModule,
    NzButtonModule,
    NzNotificationModule,
    NzToolTipModule,
    ReactiveFormsModule,
  ],
  declarations: [ModalManageProductComponent],
  exports: [ModalManageProductComponent]
})
export class ModalManageProductModule { }
