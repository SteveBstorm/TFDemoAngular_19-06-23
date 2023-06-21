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
import { Demo4Component } from './demos/components/demo4/demo4.component';
import { HighlightDirective } from './demos/directives/highlight.directive';
import { Demo5Component } from './demos/components/demo5/demo5.component';
import { EnfantComponent } from './demos/components/demo5/enfant/enfant.component';
import { Exo2Component } from './exercices/exo2/exo2.component';
import { ListeComponent } from './exercices/exo2/liste/liste.component';
import { Demo6Component } from './demos/components/demo6/demo6.component';
import { Demo7Component } from './demos/components/demo7/demo7.component';
import { Exo3Component } from './exercices/exo3/exo3.component';
import { PanierComponent } from './exercices/exo3/panier/panier.component';


@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    HomeComponent,
    Demo2Component,
    Demo3Component,
    EurtousdPipe,
    Exo1Component,
    TotimePipe,
    Demo4Component,
    HighlightDirective,
    Demo5Component,
    EnfantComponent,
    Exo2Component,
    ListeComponent,
    Demo6Component,
    Demo7Component,
    Exo3Component,
    PanierComponent
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
