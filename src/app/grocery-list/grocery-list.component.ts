import { Component, OnInit } from '@angular/core';
import { GroceryService } from "../../Service/grocery.service";
import { IGrocery } from "../Modal/Grocery_List";
import { ICookGroceryList } from "../Modal/Cook_Grocery_List";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  GrocerList: IGrocery[] = [];

  GroceryListByCookID: ICookGroceryList;

  // GroceryListByCookId: ICookGroceryList;
  id: number = 0;


  constructor(
    private _GroceryService: GroceryService,
    private _ActivatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe(params => {
      console.log(params.get("id"));
      this.id = +params.get("id");
      console.log(this.id);

    })

    if (this.id === 0) {
      this._GroceryService.getGroceryList().subscribe((data: IGrocery[]) => {
        this.GrocerList = data;
        console.log("GrocerList received in component", this.GrocerList);
      })
    }
    else {
      this._GroceryService.getGroceryListById(this.id).subscribe(data => {
        console.log("check", data);
        this.GroceryListByCookID = data;
      })
    }
  }


  OnButtonClick(itemName: string, quantity: number) {
    console.log(itemName);
    console.log(quantity);
    console.log(this.id);

    this._GroceryService.UpdateQuantity(itemName, quantity, this.id).subscribe((Data) => {
      console.log(Data);
      this._GroceryService.getGroceryListById(this.id).subscribe(data => {
        console.log("check", data);
        this.GroceryListByCookID = data;
      })
    })
  }

}
