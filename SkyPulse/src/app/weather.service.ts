import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'cb55177ca24b78ba405c195f7e842bcb';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
  }

  get5DayForecast(city: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}&units=metric&cnt=40`
    );
  }
  
  private geoApiUrl = 'https://api.openweathermap.org/geo/1.0/direct';

  getCitySuggestions(query: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.geoApiUrl}?q=${query}&limit=5&appid=${this.apiKey}`
    ).pipe(
      map(cities => cities.map(city => ({
        name: city.name,
        country: city.country,
        state: city.state,
        lat: city.lat,
        lon: city.lon
      })))
    );
  }
}