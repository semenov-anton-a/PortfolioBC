import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PipefindByValue } from './pipes/PipefindByValue.pipe';
import { AppComponent } from './app.component';
import { 
    GoodsListComponent,
    ProductDatailsComponent  
} from './components/';


@NgModule({
  declarations: [
    AppComponent,  
    GoodsListComponent, 
    PipefindByValue, 
    ProductDatailsComponent
],
imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
