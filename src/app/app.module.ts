import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BankingService } from './services/banking.service';
import { FormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { LoadingModule } from "ngx-loading";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BankDetailsComponent
  ],
  imports: [
    BrowserModule,
    LoadingModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LocalStorageModule.forRoot({
      prefix: 'BANK',
      storageType: 'localStorage'
  }),
  ],
  providers: [BankingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
