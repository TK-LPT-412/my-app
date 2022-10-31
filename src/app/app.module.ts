import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartiComponent } from './carti/carti.component';
import { FoodComponent } from './food/food.component';
import { ItemsComponent } from './items/items.component';
import { FruitComponent } from './fruit/fruit.component';
import { DrinkComponent } from './drink/drink.component';
import { EducationComponent } from './education/education.component';
import { BookComponent } from './book/book.component';
import { UsdStdPipe } from './usd-std.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartiComponent,
    FoodComponent,
    ItemsComponent,
    FruitComponent,
    DrinkComponent,
    EducationComponent,
    BookComponent,
    UsdStdPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
