import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { GroceryService } from "../../../Service/grocery.service";
import { IGrocery } from "../../Modal/Grocery_List";


@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent implements OnInit {

  itemForm: FormGroup;

  Grocery_List_array: IGrocery[] = [];

  @ViewChild('item_form') public Item_from: NgForm;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IGrocery[],
    public dialogRef: MatDialogRef<DialogModalComponent>,
    private fb: FormBuilder,
    private _GroceryService: GroceryService,
  ) { }

  ngOnInit(): void {

    this._GroceryService.getGroceryList().subscribe(list => {
      this.Grocery_List_array = list;
    });

    this.itemForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      Quantity: ['', [Validators.required]],
    });

  }

  onConfirm(): void {
    // Close the dialog, return true

    // var data = {
    //   name: this.itemForm.value.name,
    //   Quantity: this.itemForm.value.Quantity
    // }
    // this.Grocery_List_array.push(data);
    // console.log(this.Grocery_List_array);

    // this._GroceryService.AddItem(this.Grocery_List_array).subscribe(data => {
    //   console.log(data);
    // })

  }


  SubmitDialog() {
    var data = {
      name: this.itemForm.value.name,
      Quantity: this.itemForm.value.Quantity
    };
    this.Grocery_List_array.push(data);
    console.log(this.Grocery_List_array);

    this._GroceryService.AddItem(this.Grocery_List_array).subscribe(data => {
      console.log(data),(error =>{
        console.log(error);
      }),
      //This is how you will pass data from your modal to grocery_list component.
      this.dialogRef.close({ data: this.Grocery_List_array });
    })
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}
