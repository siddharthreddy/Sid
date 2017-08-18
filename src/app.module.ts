import './polyfill';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app/app.component';
import { LandingPageComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { NavComponent } from './components/nav/nav.component';
import { ImageGridComponent } from './components/imageGrid/imagegrid.component';
import { ProductDetailsComponent } from './components/productDetails/productDetails.component';
import { routing, routes } from './app/app.routes';

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true })],
  declarations: [AppComponent,
    LandingPageComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavComponent,
    ImageGridComponent,
    ProductDetailsComponent],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }