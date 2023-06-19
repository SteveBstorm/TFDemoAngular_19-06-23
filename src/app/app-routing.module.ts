import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Demo1Component } from './demos/components/demo1/demo1.component';
import { Demo2Component } from './demos/components/demo2/demo2.component';
import { Demo3Component } from './demos/components/demo3/demo3.component';
import { Exo1Component } from './exercices/exo1/exo1.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'demo1', component : Demo1Component},
  { path : 'demo2', component : Demo2Component},
  { path : 'demo3', component : Demo3Component},
  { path : 'exo1', component : Exo1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
