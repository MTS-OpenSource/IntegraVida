import { Component } from '@angular/core';
import {LanguageService} from '../../core/services/lenguage.service';
import {ButtonComponent} from '../../shared/button/button';

@Component({
  selector: 'app-hero',
  imports: [
    ButtonComponent
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  constructor(public langService: LanguageService) {}
}
