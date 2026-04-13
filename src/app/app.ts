import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar} from './shared/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Services }  from './components/services/services'
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('IntegraVida');
}
