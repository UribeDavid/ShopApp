import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routing';
import { HeaderModule } from '../shared/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutes,
    HeaderModule
  ],
  declarations: [PagesComponent],
  exports: [PagesComponent]
})
export class PagesModule { }
