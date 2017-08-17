import {  Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductDetailsDataService {

    constructor(private http: Http) {}

    public getAllProductDetails(): Observable<any> {
         return this.http.get('../assets/products.json').map((response : Response) => {
                    return response.json();
                });
     }
} 