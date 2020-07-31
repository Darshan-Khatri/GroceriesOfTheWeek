import { Component, OnInit } from '@angular/core';
import { GroceryService } from "../../Service/grocery.service";
import { IGrocery } from "../Modal/Grocery_List";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  GrocerList: IGrocery[] = [];

  constructor(private _GroceryService: GroceryService) { }

  ngOnInit(): void {
    this._GroceryService.getGroceryList().subscribe((data:IGrocery[])=>{
      this.GrocerList = data;
      console.log("GrocerList received in component",this.GrocerList);

    })
  }

}
