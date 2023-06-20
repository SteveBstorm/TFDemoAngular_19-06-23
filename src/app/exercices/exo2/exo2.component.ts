import { Component } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.css']
})
export class Exo2Component {

  listArticle : string[] = []
  nouvelArticle! : string

  ajout() {
    this.listArticle.push(this.nouvelArticle)
  }

  retirerParent(index : number) {
    this.listArticle.splice(index, 1)
  }
}
