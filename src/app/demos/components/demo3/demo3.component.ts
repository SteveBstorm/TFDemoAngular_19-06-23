import { Component } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component {
  myString : string = "Bonjour TouT LE monDe"
  myNumber : number = 52.218
  myDate : Date = new Date()
  myObject : any = {nom : "Lorent", prenom : "Steve"}
}
