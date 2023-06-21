import { Component } from '@angular/core';
import { PanierComponent } from './panier/panier.component';
import { Article } from './models/article.model';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.css']
})
export class Exo3Component {

  newArticle! : string
  constructor(private articleService : ArticleService){}

  ngOnInit() {

  }

  addArticle(){
    this.articleService.add(this.newArticle)
  }
}
