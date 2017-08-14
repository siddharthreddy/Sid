import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as lodash from 'lodash';
 
@Component({
  selector: 'image-grid',
  templateUrl: '/src/components/imagegrid/imagegrid'
})

export class ImageGridComponent implements OnInit, OnChanges {

    @Input('navSelectionId') navSelectionId: string;

    filteredImages = [];

    imageMap = [{
        navId: ['10', '20', '50'],
        id: 1001,
        src: './images/man1.jpg'
    }, {
        navId: ['10', '30', '50'],
        id: 1002,
        src: './images/woman1.jpg'
    }, , {
        navId: ['10', '40', '50'],
        id: 1003,
        src: './images/girl1.jpg'
    }, , {
        navId: ['10', '40', '50'],
        id: 1004,
        src: './images/boy1.jpg'
    }]

    constructor() {}

    ngOnInit() {}

    ngOnChanges() {
       this.filteredImages = lodash.shuffle(this.imageMap.filter(function(image) {
            return image.navId.indexOf(this.navSelectionId) > -1;
        }.bind(this)));
        
    }

}