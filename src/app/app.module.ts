import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AlertModule, Ng2BootstrapModule} from "ng2-bootstrap";
import {MaterialModule} from "@angular/material";
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ,
    Ng2BootstrapModule,
    MaterialModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers:    [ {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerGestureConfig
  }] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
