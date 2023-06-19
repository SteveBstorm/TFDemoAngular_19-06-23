import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './demos/components/demo1/demo1.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demos/components/demo2/demo2.component';
import { Demo3Component } from './demos/components/demo3/demo3.component';
import { EurtousdPipe } from './demos/pipes/eurtousd.pipe';
import { Exo1Component } from './exercices/exo1/exo1.component';
import { TotimePipe } from './exercices/exo1/totime.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    HomeComponent,
    Demo2Component,
    Demo3Component,
    EurtousdPipe,
    Exo1Component,
    TotimePipe
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
