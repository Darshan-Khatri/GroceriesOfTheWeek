import { Component, OnInit } from '@angular/core';
import { CookService } from "../../Service/cook.service";
import { Icook } from "../Modal/Cook_modal";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-dash-board',
  templateUrl: './home-dash-board.component.html',
  styleUrls: ['./home-dash-board.component.css']
})
export class HomeDashBoardComponent implements OnInit {

  CookList: Icook[] = [];
  constructor(
    private _CookService: CookService,
    private _Router: Router,
  ) { }

  ngOnInit(): void {

    this._CookService.getCook().subscribe((cookList) => {
      this.CookList = cookList;
      console.log(this.CookList);
    })
  }

  goToAllGroceryListApp() {
    this._Router.navigate(['/groceryOfTheWeek/CumalativeGroceryListOfTheWeek']);
  }

  GetCookById(id: number) {
    this._CookService.getCookByID(id).subscribe((CookData => {
      console.log(CookData);
    }))
  }

}
