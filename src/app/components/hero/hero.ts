import { Component } from '@angular/core';
import { LanguageService } from '../../core/services/lenguage.service';
import { ButtonComponent } from '../../shared/button/button';
import { Navbar } from '../../shared/navbar/navbar';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ButtonComponent,
    Navbar
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  constructor(public langService: LanguageService) {}
}
