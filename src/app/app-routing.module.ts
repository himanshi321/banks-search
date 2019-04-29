import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ROUTES } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'banks', pathMatch: 'full'},
  {path: 'banks', component: HomeComponent},
  {path: 'banks/:bankId', component: BankDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
