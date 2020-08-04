import { Component, OnInit } from '@angular/core';
import { IGrocery } from "../Modal/Grocery_List";
import { GroceryService } from "../../Service/grocery.service";

@Component({
  selector: 'app-total-week-grocery',
  templateUrl: './total-week-grocery.component.html',
  styleUrls: ['./total-week-grocery.component.css']
})
export class TotalWeekGroceryComponent implements OnInit {

  constructor(private _GroceryService: GroceryService) { }

  CumulativeGrocerList: IGrocery[] = [];

  ngOnInit(): void {

    this._GroceryService.getGroceryList().subscribe((list) => {
      this.CumulativeGrocerList = list;
      console.log(this.CumulativeGrocerList);
    })

  }

}
