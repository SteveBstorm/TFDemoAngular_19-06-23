import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
import { Subject, concatWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  listArticle : Article[] = []
  private _nbArticle : number = 0

  get nbArticle() : number {
    return this._nbArticle
  }

  set nbArticle(value : number) {
    this._nbArticle = value
    this.panierSubject.next(this.nbArticle)
  }
  panierSubject : Subject<number> = new Subject<number>()



  constructor() {
   }

  add(nom : string) {
    let index = this.listArticle.findIndex(x => x.label == nom)
    if(index >= 0) {
      this.listArticle[index].quantity++
    }
    else {
      this.listArticle.push({label : nom, quantity : 1})
    }
    this.nbArticle++
  }

  remove(index : number) {
    this.nbArticle -= this.listArticle[index].quantity
    this.listArticle.splice(index, 1)
  }

  addQuantiy(index : number){
    this.listArticle[index].quantity++
    this.nbArticle++
  }

  removeQuantity(index : number) {
    if(this.listArticle[index].quantity == 1){
      this.remove(index)
    }
    else {
      this.listArticle[index].quantity--
      this.nbArticle--
    }
  }
}
