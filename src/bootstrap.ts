import './polyfill';

import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app/app.component';


bootstrap(AppComponent)
  .catch(err => console.log(err));