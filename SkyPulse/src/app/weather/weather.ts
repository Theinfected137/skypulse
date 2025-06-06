import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './weather.html',
  styleUrls: ['./weather.scss']
})
export class Weather {
  city = '';
  weatherData: any;
  forecastError: string | null = null;
  isLoading = false;

  constructor(private weatherService: WeatherService) { }

  searchWeather() {
    this.isLoading = true;
    this.forecastError = null;

    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (err) => {
        this.weatherData = null;
        this.forecastError = 'Failed to get forecast data. Please check the city name and try again.';
        this.isLoading = false;
      }
    });

    this.getForecast();
  }

  dailyForecasts: any[] = [];

  getForecast() {
    this.weatherService.get5DayForecast(this.city).subscribe({
      next: (data) => {
        this.processForecastData(data);
        this.isLoading = false;
      },
      error: (err) => {
        this.dailyForecasts = [];
        this.forecastError = 'Failed to get forecast data. Please check the city name and try again.';
        this.isLoading = false;
        console.error('Forecast error:', err);
      }
    });
  }

  processForecastData(data: any) {
    try {
      const forecastsByDay: { [key: string]: any } = {};

      data.list.forEach((forecast: any) => {
        const date = new Date(forecast.dt * 1000);
        const dateString = date.toISOString().split('T')[0];

        if (!forecastsByDay[dateString] || date.getHours() === 12) {
          forecastsByDay[dateString] = {
            ...forecast,
            dateObj: date
          };
        }
      });

      this.dailyForecasts = Object.values(forecastsByDay)
        .sort((a, b) => a.dateObj - b.dateObj)
        .slice(0, 5);

    } catch (error) {
      this.dailyForecasts = [];
      this.forecastError = 'Error processing forecast data';
      console.error('Processing error:', error);
    }
  }
}