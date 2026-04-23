import { Component } from '@angular/core';
import {LanguageService} from '../../core/services/lenguage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.css']
})
export class Testimonials {
  constructor(public langService: LanguageService) {}

  testimonios = [
    {
      nombre: 'Carlos Ramirez',
      lugar: 'Lima, Perú',
      texto: 'testimonioCarlos',
      foto: './assets/carlos.jpg'
    },
    {
      nombre: 'Andrea Mendoza',
      lugar: 'Lima, Perú',
      texto: 'testimonioAndrea',
      foto: './assets/andrea.jpg'
    },
    {
      nombre: 'Andres Vela',
      lugar: 'Lima, Perú',
      texto: 'testimonioAndres',
      foto: './assets/andres.png'
    }
  ];
}
