import { Component, OnInit, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'sidebar',
  templateUrl: '/src/components/nav/nav',
  outputs: ['childData : outgoingData']
})

export class NavComponent implements OnInit {

   @Output('childData') outgoingData = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {
      this.registerSelection();
    }

    registerSelection(): void {
      
      var links = $('.sidebar-links > div');

			links.on('click', function () {

				links.removeClass('selected');
        $(this).addClass('selected');

      });
      
    }

    onSelect(id: string) : void {
      this.outgoingData.emit(id);
    }

}