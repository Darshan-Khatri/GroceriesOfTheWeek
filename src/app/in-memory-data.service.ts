import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Icook } from "../app/Modal/Cook_modal";
import { IGrocery } from "../app/Modal/Grocery_List";
import { ICookGroceryList } from "../app/Modal/Cook_Grocery_List";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const CookList: Icook[] = [
      { id: 1, name: 'Krishna' },
      { id: 2, name: 'Darshan' },
      { id: 3, name: 'Chintan' },
      { id: 4, name: 'Aman' },
      { id: 5, name: 'Purvesh' },
    ];

    const GroceryList: IGrocery[] = [
      { name: 'Tomato', Quantity: 0 },
      { name: 'Potatoes', Quantity: 15 },
      { name: 'Yogurt', Quantity: 0 },
      { name: 'Wafers', Quantity: 5 },
    ];

    const CookGroceryList: ICookGroceryList[] = [
      {
        id: 1,
        groceryList: GroceryList,
      },
      {
        id: 2,
        groceryList: GroceryList,
      },
      {
        id: 3,
        groceryList: GroceryList,
      },
      {
        id: 4,
        groceryList: GroceryList,
      },
      {
        id: 5,
        groceryList: GroceryList,
      },

    ]


    return { CookList, GroceryList, CookGroceryList };
  };

  // genId(heroes: Icook[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  // }
}

