import { Component, OnInit } from '@angular/core';
import { CookService } from "../../Service/cook.service";
import { Icook } from "../Modal/Cook_modal";

@Component({
  selector: 'app-cook-list',
  templateUrl: './cook-list.component.html',
  styleUrls: ['./cook-list.component.css']
})
export class CookListComponent implements OnInit {

  cookList : Icook[] =[];

  constructor(private cookHttp: CookService) { }

  ngOnInit(): void {

    this.cookHttp.getCook().subscribe((list:Icook[])=>{
      this.cookList  = list;
      console.log(this.cookList);
    })

  }

}
