import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  constructor(private router: Router) {}

  navigateToWeather() {
    this.router.navigate(['/weather']);
  }
}