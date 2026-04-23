import { Component } from '@angular/core';
import {LanguageService} from '../../core/services/lenguage.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  standalone: true, // Asumo que usas Standalone por los errores anteriores
  imports: []
})
export class About {

  constructor(public langService: LanguageService) {}
}
