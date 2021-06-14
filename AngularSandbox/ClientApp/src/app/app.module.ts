import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseInputOutputComponent } from './base-input-output/base-input-output.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseInputOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
