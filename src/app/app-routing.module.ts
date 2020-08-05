import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CookListComponent } from './cook-list/cook-list.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { HomeDashBoardComponent } from './home-dash-board/home-dash-board.component';
import { TotalWeekGroceryComponent } from './total-week-grocery/total-week-grocery.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'groceryOfTheWeek/home', component: HomeDashBoardComponent},
  { path: 'groceryOfTheWeek/cookList', component: CookListComponent },
  { path: 'groceryOfTheWeek/groceryList/:id', component: GroceryListComponent},
  { path: 'groceryOfTheWeek/groceryList', component: GroceryListComponent},
  { path: 'groceryOfTheWeek/CumalativeGroceryListOfTheWeek', component: TotalWeekGroceryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
