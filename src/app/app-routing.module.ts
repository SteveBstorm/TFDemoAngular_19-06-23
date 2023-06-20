import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Demo1Component } from './demos/components/demo1/demo1.component';
import { Demo2Component } from './demos/components/demo2/demo2.component';
import { Demo3Component } from './demos/components/demo3/demo3.component';
import { Exo1Component } from './exercices/exo1/exo1.component';
import { Demo4Component } from './demos/components/demo4/demo4.component';
import { Demo5Component } from './demos/components/demo5/demo5.component';
import { Exo2Component } from './exercices/exo2/exo2.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'demo1', component : Demo1Component},
  { path : 'demo2', component : Demo2Component},
  { path : 'demo3', component : Demo3Component},
  { path : 'demo4', component : Demo4Component},
  { path : 'demo5', component : Demo5Component},
  { path : 'exo1', component : Exo1Component},
  { path : 'exo2', component : Exo2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
