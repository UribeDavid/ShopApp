import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing';
import { ReactiveFormsModule } from '@angular/forms';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { HttpClientModule } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { LockOutline, ShopTwoTone, UserOutline } from '@ant-design/icons-angular/icons';

// Ant-desing icons
const icons: IconDefinition[] = [ LockOutline, ShopTwoTone, UserOutline ];

@NgModule({
  imports: [
    CommonModule,
    AuthRoutes,
    HttpClientModule,
    NzIconModule.forChild(icons),
    ReactiveFormsModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzNotificationModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
