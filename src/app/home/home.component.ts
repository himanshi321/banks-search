import { Component, Input } from '@angular/core';
import { BankingService } from '../services/banking.service';
import { BankDetails } from '../models/bank-details';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  loadingFlag:boolean;
  city: string = 'BANGALORE';
  favorites:string = 'FAVORITES';
  searchParam: string = '';
  searchList: BankDetails[] = [];
  banksList: BankDetails[] = [];
  favoriteList: BankDetails[] = [];
  constructor(private service: BankingService,
    private router: Router,
    public storage:LocalStorageService) {
    this.checkForBankList();
  }
  checkForBankList() {
    if(this.storage.get(this.city)) {
      this.banksList = this.storage.get(this.city);
      this.initialize();
    }
    else
    this.getAllBanksListByCity();
  }
  getAllBanksListByCity() {
    this.loadingFlag = true;
    this.service.getBanksList(this.city).subscribe(
      res => {
        setTimeout(() => {
          this.loadingFlag = false;
      }, 1000);
        this.banksList = res;
        console.log(res);
        this.initialize();
        this.storage.set(this.city,this.banksList);
      },
      error => {
        this.loadingFlag = false;
       }
    );
  }

  initialize() {
    this.searchList = this.banksList;
  }

  search() {
    if (this.searchParam && this.searchParam.length > 2 && this.searchParam.trim() != '') {
      this.searchList = this.banksList.filter((item) => {
        return (item.bank_name.toLowerCase().indexOf(this.searchParam.toLowerCase()) != -1) ||
        (item.branch.toLowerCase().indexOf(this.searchParam.toLowerCase()) != -1) ||
        (item.city.toLowerCase().indexOf(this.searchParam.toLowerCase()) != -1) ||
        (item.ifsc.toLowerCase().indexOf(this.searchParam.toLowerCase()) != -1) ||
        (item.state.toLowerCase().indexOf(this.searchParam.toLowerCase()) != -1);
      })
    }
    else 
      this.initialize();
  }
  maintainFavorites(favoriteBank:BankDetails,ev:Event) {
    ev.stopPropagation();
    this.banksList.forEach(bank => {
      if(bank.ifsc == favoriteBank.ifsc) {
        bank = favoriteBank
      }
    });
    this.storage.set(this.city,this.banksList);
  }
  navigateToDetailPage(bank:BankDetails) {
    this.storage.set('details',bank);
    this.router.navigate(['banks/',bank.bank_id]);
  }
}
