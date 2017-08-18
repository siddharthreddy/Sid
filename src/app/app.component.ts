import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: '/src/app/app'
})

export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

}