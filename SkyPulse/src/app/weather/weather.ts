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
    if (!this.selectedCity && this.city.includes(',')) {
      const parts = this.city.split(',');
      this.selectedCity = {
        name: parts[0].trim(),
        country: parts[1].trim()
      };
    }

    this.isLoading = true;
    this.forecastError = null;

    const searchQuery = this.selectedCity
      ? `${this.selectedCity.name},${this.selectedCountry?.code || this.selectedCity.country}`
      : this.city;

    this.weatherService.getWeather(searchQuery).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (err) => {
        this.weatherData = null;
        this.forecastError = 'Failed to get current weather data';
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

  suggestions: any[] = [];
  showSuggestions = false;
  selectedCountry: any = null;
  selectedCity: any = null;

  searchCities(query: string) {
    if (query.length > 2) {
      this.weatherService.getCitySuggestions(query).subscribe({
        next: (cities) => {
          this.suggestions = cities;
          this.showSuggestions = cities.length > 0;
        },
        error: (err) => {
          this.suggestions = [];
          this.showSuggestions = false;
        }
      });
    } else {
      this.suggestions = [];
      this.showSuggestions = false;
    }
  }

selectCity(city: any) {
  this.selectedCity = city;
  this.city = `${city.name}, ${city.state ? city.state + ', ' : ''}${city.country}`;
  this.suggestions = [];
  this.showSuggestions = false;
  this.weatherData = null;
  this.dailyForecasts = [];
  this.forecastError = null;
  this.searchWeatherByCoords(city.lat, city.lon);
}

searchWeatherByCoords(lat: number, lon: number) {
  this.isLoading = true;

  this.weatherService.getWeatherByCoords(lat, lon).subscribe({
    next: (data) => {
      this.weatherData = data;
      this.getForecastByCoords(lat, lon);
    },
    error: (err) => {
      this.weatherData = null;
      this.forecastError = 'Failed to get current weather data';
      this.isLoading = false;
    }
  });
}

getForecastByCoords(lat: number, lon: number) {
  this.weatherService.get5DayForecastByCoords(lat, lon).subscribe({
    next: (data) => {
      this.processForecastData(data);
      this.isLoading = false;
    },
    error: (err) => {
      this.dailyForecasts = [];
      this.forecastError = 'Failed to get forecast data';
      this.isLoading = false;
    }
  });
}

hideSuggestions() {
  setTimeout(() => this.showSuggestions = false, 200);
}

trackByCity(index: number, city: any): string {
  return `${city.name}-${city.country}-${city.state}-${city.lat}-${city.lon} || ''}`;
}

trackByDay(index: number, day: any): number {
  return day.dt;
}

}