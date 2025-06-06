import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Weather } from './weather/weather';

export const routes: Routes = [
  { path: '', component: Home },         // Splash screen
  { path: 'weather', component: Weather } // Your existing search page
];