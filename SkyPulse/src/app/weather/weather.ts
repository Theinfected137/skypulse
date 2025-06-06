// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { WeatherService } from '../weather';

// @Component({
//   selector: 'app-weather',
//   standalone: true,
//   imports: [CommonModule, FormsModule, HttpClientModule], // <-- Add these
//   templateUrl: './weather.html',
//   styleUrls: ['./weather.scss']
// })
// export class Weather {
//   city = '';
//   weatherData: any;

//   constructor(private weatherService: WeatherService) {}

//   searchWeather() {
//     this.weatherService.getWeather(this.city).subscribe(data => {
//       this.weatherData = data;
//       console.log(data);
//     });
//   }
// }