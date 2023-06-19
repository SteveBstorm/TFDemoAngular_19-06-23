import { Component } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.css']
})
export class Exo1Component {

  time : number = 150
  timer : any

  start() {
    this.timer = setInterval(
      () => {this.time++}, 1000)
  }

  pause() {
    clearInterval(this.timer)
    this.timer = undefined
  }

  reset() {
    this.pause()
    this.time = 0
  }
}
