import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsDataService } from '../../services/productDetailsData.service'
 
@Component({
  selector: 'product-details',
  templateUrl: '/src/components/productDetails/productDetails', 
  providers: [ProductDetailsDataService]
})

export class ProductDetailsComponent implements OnInit, OnDestroy {

    isReady: boolean = false;
    id: number;
    private sub: any;
    allProductDetails: object;
    currentProduct: object;

    constructor(private route: ActivatedRoute, private _productDetailsDataService: ProductDetailsDataService) {}

    ngOnInit() {

        this._productDetailsDataService.getAllProductDetails().subscribe(data => {
            this.allProductDetails = data;

            this.sub = this.route.params.subscribe(params => {
                this.id = +params['id'];

                this.currentProduct = this.allProductDetails.products.find(function(product) {
                    return product.id === this.id;
                }.bind(this));

                this.isReady = true;

            });
        });

    }

    ngOnDestroy() {
        //this.sub.unsubscribe();
    }

}