import { Component } from '@angular/core';
import {Contact} from "../../components/contact/contact";
import {Hero} from "../../components/hero/hero";
import {Navbar} from "../../shared/navbar/navbar";
import { Services } from '../../components/services/services';

@Component({
  selector: 'app-pages',
    imports: [
        Contact,
        Hero,
        Navbar,
      Services
    ],
  templateUrl: './pages.html',
  styleUrl: './pages.css',
})
export class Pages {

}
