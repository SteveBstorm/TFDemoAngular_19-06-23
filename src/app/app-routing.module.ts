import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Demo1Component } from './demos/components/demo1/demo1.component';
import { Demo2Component } from './demos/components/demo2/demo2.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'demo1', component : Demo1Component},
  { path : 'demo2', component : Demo2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
