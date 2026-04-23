import { Component } from '@angular/core';
import {Contact} from "../../components/contact/contact";
import {Hero} from "../../components/hero/hero";
import {Navbar} from "../../shared/navbar/navbar";
import { Services } from '../../components/services/services';
import { About } from '../../components/about/about';

@Component({
  selector: 'app-pages',
    imports: [
        Contact,
        Hero,
        Navbar,
      Services,
      About
    ],
  templateUrl: './pages.html',
  styleUrl: './pages.css',
})
export class Pages {

}
