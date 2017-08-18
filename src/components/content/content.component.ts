import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: '/src/components/content/content'
})

export class ContentComponent implements OnInit {

  navSelectionId: string = '10';

  constructor() { }

  ngOnInit() { }

  public handleEvent(childData: any) {
    this.navSelectionId = childData;
  }

}