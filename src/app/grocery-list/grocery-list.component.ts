import { Component, OnInit } from '@angular/core';
import { GroceryService } from "../../Service/grocery.service";
import { IGrocery } from "../Modal/Grocery_List";
import { ICookGroceryList } from "../Modal/Cook_Grocery_List";
import { ActivatedRoute } from "@angular/router";
import {MatDialog, MatDialogConfig, } from '@angular/material/dialog';
import { DialogModalComponent } from '../Share/dialog-modal/dialog-modal.component';
//import { FormBuilder,FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  GrocerList: IGrocery[] = [];

  GroceryListByCookID: ICookGroceryList;
  id: number = 0;
  //itemForm:FormGroup;

  constructor(
    private _GroceryService: GroceryService,
    private _ActivatedRoute: ActivatedRoute,
    private _MatDialog:MatDialog,
    //private fb:FormBuilder,
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


  // OnButtonClick(itemName: string, quantity: number) {
  //   console.log(itemName);
  //   console.log(quantity);
  //   console.log(this.id);

  //   this._GroceryService.UpdateQuantity(itemName, quantity, this.id).subscribe((Data) => {
  //     console.log(Data);
  //     this._GroceryService.getGroceryListById(this.id).subscribe(data => {
  //       console.log("check", data);
  //       this.GroceryListByCookID = data;
  //     })
  //   })
  // }

  OnButtonClick() {

    console.log(this.id);
    console.log(this.GroceryListByCookID);

    this._GroceryService.UpdateQuantity(this.GroceryListByCookID.groceryList, this.id).subscribe((Data) => {
      this._GroceryService.getGroceryListById(this.id).subscribe(data => {
        this.GroceryListByCookID.groceryList = data.groceryList;
        console.log("this.GroceryListByCookID", this.GroceryListByCookID);

      })
    })
  }

  ModalForm(){

    // this.itemForm = this.fb.group({
    //   name:['',[Validators.required, Validators.pattern('^[a-zA-Z ]{2,25}*$')]],
    //   Quantity:['',[Validators.required,Validators.pattern("^[0-9]{1,3}")]],
    // })


    const MatDialog = this._MatDialog.open(DialogModalComponent,
      {
        maxWidth:"80%",
        disableClose : true,
        autoFocus:true,

      });

      MatDialog.afterClosed().subscribe(dialogResult => {
        console.log(dialogResult);
        this.GroceryListByCookID.groceryList = dialogResult.data;
        console.log(this.GroceryListByCookID);
      });
  }

}
