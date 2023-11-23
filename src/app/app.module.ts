import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './shared/components/card/card.component';
import { TableComponent } from './shared/components/table/table.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculationComponent } from './shared/components/calculation/calculation.component';
import { DashBoardComponent } from './shared/components/dash-board/dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent,
    NavbarComponent,
    CalculationComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
