import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { ShopTwoTone, LogoutOutline, MenuOutline, ShoppingCartOutline, SolutionOutline } from '@ant-design/icons-angular/icons';
import { HttpClientModule } from '@angular/common/http';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

// Ant-desing icons
const icons: IconDefinition[] = [ ShopTwoTone, LogoutOutline, MenuOutline, ShoppingCartOutline, SolutionOutline ];

@NgModule({
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzIconModule.forChild(icons),
    HttpClientModule,
    NzPopconfirmModule,
    NzBadgeModule,
    NzNotificationModule,
    NzDropDownModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
