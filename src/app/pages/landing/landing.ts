import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-landing',
  imports: [Navbar, Hero, Contact],
  templateUrl: './landing.html',
})
export class Landing {}
