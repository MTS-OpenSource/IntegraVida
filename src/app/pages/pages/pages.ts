import { Component } from '@angular/core';
import {Contact} from "../../components/contact/contact";
import {Hero} from "../../components/hero/hero";
import {Navbar} from "../../shared/navbar/navbar";
import { Services } from '../../components/services/services';
import { About } from '../../components/about/about';
import { Testimonials } from '../../components/testimonials/testimonials';

@Component({
  selector: 'app-pages',
    imports: [
      Navbar,
      Hero,
      Services,
      About,
      Testimonials,
      Contact
    ],
  templateUrl: './pages.html',
  styleUrl: './pages.css',
})
export class Pages {

}
