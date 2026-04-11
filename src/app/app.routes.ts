import { Routes } from '@angular/router';
import { Navbar } from './shared/navbar/navbar'
import {App} from './app';
export const routes: Routes = [
  {path: '', redirectTo:'landing', pathMatch: 'full'},
  {path:'landing', component: App},
];
