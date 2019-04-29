import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankDetails } from '../models/bank-details';

@Injectable({
  providedIn: 'root'
})
export class BankingService {

  constructor(private http:HttpClient) {

   }
   getBanksList(city:string):Observable<BankDetails[]> {
    let url = "https://vast-shore-74260.herokuapp.com/banks?city=";
    return this.http.get<any>(url+city);
   }
}
