import { Component } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.css']
})
export class Demo5Component {
  reponseDeEnfant! : boolean

  recevoirReponse(rep : boolean) {
    this.reponseDeEnfant = rep
  }
}
