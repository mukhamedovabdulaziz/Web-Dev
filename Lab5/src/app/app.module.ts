import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { ProductItemComponent } from './product-item/product-item.component';

const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'product-list/:category', component: ProductListComponent },
  { path: 'product-item/:productId', component: ProductItemComponent },
];

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    CategoryComponent,
    ProductItemComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
