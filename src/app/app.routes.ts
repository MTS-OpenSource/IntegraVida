import { Routes } from '@angular/router';
import {Pages} from './pages/pages/pages';

export const routes: Routes = [
  {path: '', redirectTo:'landing', pathMatch: 'full'},
  {path:'landing', component: Pages},
];
