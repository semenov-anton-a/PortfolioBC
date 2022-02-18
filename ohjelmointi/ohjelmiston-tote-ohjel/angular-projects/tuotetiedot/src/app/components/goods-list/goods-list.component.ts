import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services';

import { Observable, of, from } from 'rxjs';
@Component({
    selector: 'app-goods-list',
    templateUrl: './goods-list.component.html',
    styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {

    productsList : any;

    constructor(
        private productsService: ProductsService
    ) { }

    ngOnInit(): void {
        this.getAllProducts();
    }

    /**
     *  Get all products
     */
    private getAllProducts()
    {
        let d = this.productsService.getAllProducts()
            .subscribe( ( data : any ) => { this.productsList = data } )
    }
    //

}       
