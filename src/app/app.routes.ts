import { Routes } from '@angular/router';
import { Navbar } from './shared/navbar/navbar'
export const routes: Routes = [
  {path: '', redirectTo:'landing', pathMatch: 'full'},
  {path:'landing', component: Navbar},
];
