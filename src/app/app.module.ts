import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './demos/components/demo1/demo1.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demos/components/demo2/demo2.component';


@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    HomeComponent,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
