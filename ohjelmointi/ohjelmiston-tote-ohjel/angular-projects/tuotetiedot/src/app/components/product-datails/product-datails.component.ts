import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs';

import { ProductsService } from "../../services";

// import {Promise} from "../../services"

@Component({
    selector: 'app-product-datails',
    templateUrl: './product-datails.component.html',
    styleUrls: ['./product-datails.component.css']
})
export class ProductDatailsComponent implements OnInit {

    // productData : Observable<[]> | undefined;
    productData : any | undefined = undefined;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private productsService: ProductsService
    ) {  }
    
    
    ngOnInit(): void {
         this.getProductIdName();
    }

    
    private getProductIdName(){
        const name : string  = String( this.route.snapshot.paramMap.get('name') );
        this.productsService
            .getProductIdName( name )
            .subscribe( (data) => { this.productData = data } );       
    }

    goBack(): void {
        this.location.back();
    }

}
