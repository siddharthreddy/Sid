// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../components/landing/landing.component';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from '../components/home/home.component';
import { ImageGridComponent } from '../components/imageGrid/imagegrid.component';
import { ProductDetailsComponent } from '../components/productDetails/productDetails.component';

// Route Configuration
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'landing', component: LandingPageComponent, children: [
    { path: 'details:id', component: ProductDetailsComponent, outlet:'firstchild' },
    { path: ':id', component: ImageGridComponent, outlet:'firstchild'}
  ]},
  { path: 'details', component: ProductDetailsComponent, outlet:'firstchild'},
  { path: '**', component: AppComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);