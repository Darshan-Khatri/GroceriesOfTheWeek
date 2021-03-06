import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CookListComponent } from './cook-list/cook-list.component';
import { CookService } from 'src/Service/cook.service';
import { GroceryService } from 'src/Service/grocery.service';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { HomeDashBoardComponent } from './home-dash-board/home-dash-board.component';
import { TotalWeekGroceryComponent } from './total-week-grocery/total-week-grocery.component';
import { DialogModalComponent } from './Share/dialog-modal/dialog-modal.component';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CookListComponent,
    GroceryListComponent,
    HomeDashBoardComponent,
    TotalWeekGroceryComponent,
    DialogModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    CookService,
    GroceryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
