import { Component } from '@angular/core';
import {LanguageService} from '../../core/services/lenguage.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
  standalone: true, // Asumo que usas Standalone por los errores anteriores
})
export class About {
  constructor(public langService: LanguageService) {}
}
