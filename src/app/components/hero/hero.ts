import { Component } from '@angular/core';
import { LanguageService } from '../../core/services/lenguage.service';
import { Navbar } from '../../shared/navbar/navbar';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    Navbar
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  constructor(public langService: LanguageService) {}
}
