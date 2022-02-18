import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services';

@Component({
    selector: 'app-goods-list',
    templateUrl: './goods-list.component.html',
    styleUrls: ['./goods-list.component.css']
})

export class GoodsListComponent implements OnInit {

    private _findByRange : Array<number> = [ 0 , 3 ] ;
    
    selectOptions = [
        {   value : "select_all", 
            title : "All" },
        
        {   value : "select_olderByRange", 
            title : `Older by ${this._findByRange[0]}-${this._findByRange[1]-1}` },
        
        {   value : "select_others", 
            title : "Over 10 years old" }
    ];


    productsList : any;

    constructor(
        private productsService: ProductsService
    ) { }

    ngOnInit(): void {
        this.select_all();
    }

    searchByValue( value : any ){
        let methodName = value.target.value;
        this.selectOptions
            .forEach( (v,k) => {
                if( v.value == methodName ){
                    eval( "this."+methodName+"()" ); 
                };
        } );
    }

    /**
     * Get Others Products 
     */
    private select_others() {
        this.productsService.getAllProducts()
        .subscribe( ( data : any ) => { 
            this.productsList = data.slice( 10 )
        })
    }

    /**
     * Get All Products by Range
     * @param _findByRange Array<number> [ 0 , 3 ]
     */
    private select_olderByRange( _findByRange : Array<number> ) {
        this.productsService.getAllProducts()
            .subscribe( ( data : any ) => { 
                this.productsList = data.slice( this._findByRange[0], this._findByRange[1] )
            })
    }   

    /**
     * Get All Products
     */
    private select_all() {
        this.productsService.getAllProducts()
            .subscribe( ( data : any ) => { this.productsList = data } )
    }

}       
