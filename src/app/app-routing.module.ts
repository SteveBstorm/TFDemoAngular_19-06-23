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
import { Demo6Component } from './demos/components/demo6/demo6.component';
import { Demo7Component } from './demos/components/demo7/demo7.component';
import { Exo3Component } from './exercices/exo3/exo3.component';
import { Demo8Component } from './demos/components/demo8/demo8.component';
import { Demo9Component } from './demos/components/demo9/demo9.component';
import { TargetComponent } from './demos/components/demo8/target/target.component';
import { articleResolver } from './demos/components/demo8/target/article.resolver';
import { ExercicesComponent } from './exercices/exercices.component';
import { DemosComponent } from './demos/demos.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path : '', redirectTo : 'home', pathMatch : 'full'},
  { path : 'home', component : HomeComponent},
  {path : 'demos', component : DemosComponent, children : [
    { path : '', redirectTo : 'demo9', pathMatch : 'full'},
    { path : 'demo1', component : Demo1Component},
    { path : 'demo2', component : Demo2Component},
    { path : 'demo3', component : Demo3Component},
    { path : 'demo4', component : Demo4Component},
    { path : 'demo5', component : Demo5Component},
    { path : 'demo6', component : Demo6Component},
    { path : 'demo7', component : Demo7Component},
    { path : 'demo8', component : Demo8Component},
    { path : 'target/:id', resolve : {resolvedArticle : articleResolver}, component : TargetComponent},
    { path : 'demo9', component : Demo9Component},
  ]},

  { path : 'exercice', component : ExercicesComponent, children : [
    { path : 'exo1', component : Exo1Component},
    { path : 'exo2', component : Exo2Component},
    { path : 'exo3', component : Exo3Component},
  ]},
  { path : 'error', component : ErrorComponent},
  { path : '**', redirectTo: 'error'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
