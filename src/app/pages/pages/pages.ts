import { Component } from '@angular/core';
import {Contact} from "../../components/contact/contact";
import {Hero} from "../../components/hero/hero";
import {Navbar} from "../../shared/navbar/navbar";

@Component({
  selector: 'app-pages',
    imports: [
        Contact,
        Hero,
        Navbar
    ],
  templateUrl: './pages.html',
  styleUrl: './pages.css',
})
export class Pages {

}
