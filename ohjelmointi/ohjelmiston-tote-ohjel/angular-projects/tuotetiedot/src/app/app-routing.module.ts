import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductDatailsComponent, GoodsListComponent } from './components';

const routes: Routes = [
    { path: '', component: GoodsListComponent , pathMatch : "full" },
    { path: 'p/:name', component: ProductDatailsComponent },
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
