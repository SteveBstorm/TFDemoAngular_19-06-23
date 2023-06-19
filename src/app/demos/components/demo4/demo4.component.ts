import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.css']
})
export class Demo4Component {
  isVisible: boolean = false

  series: any[] = [
    {titre : "Kaamelott", genre : "Comédie"},
    {titre : "The Mandalorian", genre : "Sci-fi"},
    {titre : "Walking Dead", genre : "Horreur"},
    {titre : "Friends", genre : "Sitcom"}
  ]

  switchVisible() {
    this.isVisible = !this.isVisible
  }

  parcourir() {
    for(let i = 0; i < this.series.length; i++){
      console.log(this.series[i].titre)
    }

    this.series.forEach((item) =>  {
      console.log(item)
    })
  }
}
