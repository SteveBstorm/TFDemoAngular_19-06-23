import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoobservableService {

  color! : string

  colorOBS : Subject<string> = new Subject<string>()

  emitColor() {
    this.colorOBS.next(this.color)
  }

  constructor() { }

  setColor(color : string) {
    this.color = color
    this.emitColor()
  }
}
