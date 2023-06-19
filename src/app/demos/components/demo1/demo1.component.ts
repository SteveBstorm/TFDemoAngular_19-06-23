import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {
  //si paramètre d'accessibilité non précisé => public par défaut
  myProp : Movie  = {title : "Star wars", year : 1977}

  myString : string = "Bonjour"

  private myNumber : number = 52.213
  myDate : Date = new Date("2023-06-19")
  myBool : boolean = true
  myObject : any = "ce que je veux"

  monFilm : Film = new Film()
  ngOnInit(){
    //this. obligatoire pour accèder à un membre de ma classe
    this.myProp.title = "New Hope"
    console.log(this.myProp)
  }

  ngOnDestroy(): void {
    console.log("Au revoir !!!")
  }
}

export class Film { //export rend la classe disponible à l'extérieur du fichier
  titre!:string
  annee!:number
  constructor() {
    this.titre = "toto"
  }
}

export interface Movie {
  title : string
  year : number
}
