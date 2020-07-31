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

  // headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  // httpOptions = {
  //   headers: this.headers
  // };

  constructor(private http: HttpClient) { }

  getCook(): Observable <Icook[]>{
    return this.http.get<Icook[]>(
      this.ApiUrl
    ).pipe(tap(data=>{
      console.log("CookList", data);
    }))
  };
}
