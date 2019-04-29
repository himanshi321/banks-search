import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BankDetails } from '../models/bank-details';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent {
  bankDetails: BankDetails;
  constructor(private storage:LocalStorageService) {
    this.bankDetails = this.storage.get('details');
  }

}
