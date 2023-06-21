import { Component } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  listArticle! : Article[]

  constructor(private service : ArticleService){}

  ngOnInit() {
    this.listArticle = this.service.listArticle
  }

  remove(index : number){
    this.service.remove(index)
  }

  addQty(index: number){
    this.service.addQuantiy(index)
  }

  remQty(index : number) {
    this.service.removeQuantity(index)
  }
}
