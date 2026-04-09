import { Component } from '@angular/core';
import {LanguageService} from '../../core/services/lenguage.service';
import {ButtonComponent} from '../button/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public langService: LanguageService) {}
}
