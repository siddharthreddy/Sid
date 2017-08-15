import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'product-details',
  templateUrl: '/src/components/productDetails/productDetails'
})

export class ProductDetailsComponent implements OnInit, OnDestroy {

    id: number;
    private sub: any;

    constructor(private route: ActivatedRoute) {
        console.info('ProductDetailsComponent called');
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            console.info('id:', this.id);
            // In a real app: dispatch action to load the details here.
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}