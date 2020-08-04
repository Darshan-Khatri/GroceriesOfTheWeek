import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { Icook } from "../app/Modal/Cook_modal";

@Injectable({
  providedIn: 'root'
})
export class CookService {

  ApiUrl = 'api/CookList';
  ApiUrlById = 'api/CookGroceryList/';

  constructor(private http: HttpClient) { }

  getCook(): Observable<Icook[]> {
    return this.http.get<Icook[]>(
      this.ApiUrl
    ).pipe(tap(data => {
      console.log("CookList", data);
    }))
  };

  // getCookByID(id:number):Observable<Icook>{
  //   const url = `${this.ApiUrl}/${id}`;
  //   return this.http.get<Icook>(url).pipe(
  //     tap(item => console.log("Fetched ID", item)
  //     )
  //   );
  // };


  getCookByID(id: number): Observable<any> {
    return this.http.get<any>(this.ApiUrlById + id)
  };

}

