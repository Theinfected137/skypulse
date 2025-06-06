import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Weather } from './weather/weather';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Weather],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App{
  title = 'SkyPulse';
}