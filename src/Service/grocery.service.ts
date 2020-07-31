import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { IGrocery } from "../app/Modal/Grocery_List";

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  ApiUrl = 'api/GroceryList'
  constructor(private _HttpClient: HttpClient) { }

  getGroceryList(): Observable<IGrocery[]> {
    return this._HttpClient.get<IGrocery[]>(this.ApiUrl)
    .pipe(tap(data => {
      console.log("GroceryList Received in service", data)
    }));
  };
}

