import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: '/src/components/nav/nav'
})

export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.registerSelection();
    this.onSelect(10);
  }

  registerSelection(): void {

    var links = $('.sidebar-links > div');

    links.on('click', function() {

      links.removeClass('selected');
      $(this).addClass('selected');

    });

  }

  onSelect(id: number): void {
    this.router.navigate(['/landing', { outlets: { 'firstchild': ['list', id] } }]);
  }

}