import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Icook } from "../app/Modal/Cook_modal";
import { IGrocery } from "../app/Modal/Grocery_List";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const CookList = [
      { id: 1, name: 'Krishna' },
      { id: 2, name: 'Darshan' },
      { id: 3, name: 'Chintan' },
      { id: 4, name: 'Aman' },
      { id: 5, name: 'Purvesh' },
    ];
    const GroceryList = [
      { name: 'Tomato', Quantity: 10 },
      { name: 'Potatoes', Quantity: 15 },
      { name: 'Yogurt', Quantity: 2 },
      { name: 'Wafers', Quantity: 5 },
    ];
    return { CookList, GroceryList };
  };

  // create_Grocery_Db() {
  //   const GroceryList = [
  //     { name: 'Tomato', Quantity: 10 },
  //     { name: 'Potatoes', Quantity: 15 },
  //     { name: 'Yogurt', Quantity: 2 },
  //     { name: 'Wafers', Quantity: 5 },
  //   ];
  //   return { GroceryList };
  // };

  genId(heroes: Icook[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}

