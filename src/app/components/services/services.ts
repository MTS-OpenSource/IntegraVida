import { Component } from '@angular/core';
import {LanguageService} from '../../core/services/lenguage.service';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  constructor(public langService: LanguageService) {}

}
