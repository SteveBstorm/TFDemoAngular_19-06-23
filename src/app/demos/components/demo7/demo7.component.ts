import { Component } from '@angular/core';
import { DemoobservableService } from '../../services/demoobservable.service';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.css']
})
export class Demo7Component {
  colors : string[]= [
    "red", "green", "yellow", "blue", "chartreuse"
  ]

  set selectedColor(value : string) {
    this.changeColor(value)
  }
  constructor(
    private demoService : DemoobservableService
    ){}

  changeColor(c: string) {
    console.log(c)
    this.demoService.setColor(c);
  }
}
