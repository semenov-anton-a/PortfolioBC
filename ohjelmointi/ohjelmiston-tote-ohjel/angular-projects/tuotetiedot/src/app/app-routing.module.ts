import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductDatailsComponent, GoodsListComponent } from './components';

const routes: Routes = [
    { path: ':name', component: ProductDatailsComponent },
    { path: '', component: GoodsListComponent , pathMatch : "full" },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ] 
})

export class AppRoutingModule { }
