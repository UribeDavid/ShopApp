import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';
import { CartRoutes } from './cart.routing';

import { HttpClientModule } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { CloseOutline, MinusOutline, PlusOutline } from '@ant-design/icons-angular/icons';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzButtonModule } from 'ng-zorro-antd/button';

// Ant-desing icons
const icons: IconDefinition[] = [ CloseOutline, MinusOutline, PlusOutline ];

@NgModule({
  imports: [
    CommonModule,
    CartRoutes,
    HttpClientModule,
    NzIconModule.forChild(icons),
    NzCardModule,
    NzBadgeModule,
    NzEmptyModule,
    NzButtonModule
  ],
  declarations: [CartComponent]
})
export class CartModule { }
