import { Component } from '@angular/core';
import {LanguageService} from '../../core/services/lenguage.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(public langService: LanguageService) {}
}
