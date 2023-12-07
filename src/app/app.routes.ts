import { Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { AddTransactionComponent } from './pages/add-transaction/add-transaction.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add', component: AddTransactionComponent},
  { path: 'about', component: AboutComponent},
];
