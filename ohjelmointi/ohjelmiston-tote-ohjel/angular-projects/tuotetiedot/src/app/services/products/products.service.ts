import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {


    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient
    ) { }


    getAllProducts() : any {

        console.log( "getAllProducts")

        let url = "./assets/phones/phones.json";
        
        const json = this.http.get( url )
            .pipe( 
                tap( (response) => { console.log(response) } )
             );
             
        return json;
    }

    
    getProductIdName( name: string ) : Observable<any> {
        let url  = "assets/phones/" + name + '.json';
        
        const json = this.http.get<any>( url ).pipe(
            // debounceTime(300),
            // distinctUntilChanged(),
            tap( (response) => { console.log(response)} ),
            // switchMap( (term: any, key:number) => { console.log(term) } ) 
        );

        return json;
    }  

}
