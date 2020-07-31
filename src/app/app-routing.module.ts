import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CookListComponent } from './cook-list/cook-list.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';


const routes: Routes = [
  { path: 'groceryOfTheWeek/cookList', component: CookListComponent },
  { path: 'groceryOfTheWeek/groceryList', component: GroceryListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
