import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BaseInputOutputComponent } from './base-input-output/base-input-output.component';
import { ClickerComponent } from './clicker/clicker.component';
import { ClickerDisplayComponent } from './clicker-display/clicker-display.component';
import { RatingDisplayComponent } from './rating-display/rating-display.component';
import { RatingClickerComponent } from './rating-clicker/rating-clicker.component';
import { InputTyperComponent } from './input-typer/input-typer.component';
import { InputDisplayComponent } from './input-display/input-display.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseInputOutputComponent,
    ClickerComponent,
    ClickerDisplayComponent,
    RatingDisplayComponent,
    RatingClickerComponent,
    InputTyperComponent,
    InputDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
