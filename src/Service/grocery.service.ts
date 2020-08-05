import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { IGrocery } from "../app/Modal/Grocery_List";
import { ICookGroceryList } from "../app/Modal/Cook_Grocery_List";



@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  ApiUrl = 'api/GroceryList';
  ApiUrlById = 'api/CookGroceryList/';

  constructor(
    private _HttpClient: HttpClient,
  ) { }

  getGroceryList(): Observable<IGrocery[]> {
    return this._HttpClient.get<IGrocery[]>(this.ApiUrl)
      .pipe(tap(data => {
        console.log("GroceryList Received in service", data)
      }));
  };

  getGroceryListById(id: number): Observable<ICookGroceryList> {
    return this._HttpClient.get<ICookGroceryList>(this.ApiUrlById + id)
      .pipe(tap(data => {
        console.log("Cook id is = ", id, data)
      }));
  }

  UpdateQuantity(name: string, Quantity: number, id: number): Observable<IGrocery> {
    var input = {id: id, groceryList: [{name: name, Quantity: Quantity}]};
    console.log("input data", this.ApiUrlById + id)
    return this._HttpClient.put<IGrocery>(this.ApiUrlById + id, input)

  }
}

