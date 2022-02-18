import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

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
        let url = "assets/phones/phones.json"
        const data = this.http.get( url )
            .pipe( 
                tap( (response) => { console.log(response) } )
             );
        return data;
    }


}
