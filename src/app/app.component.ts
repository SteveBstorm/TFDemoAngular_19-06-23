import { Component } from '@angular/core';
import { FakeauthService } from './demos/services/fakeauth.service';
import { DemoobservableService } from './demos/services/demoobservable.service';
import { ArticleService } from './exercices/exo3/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoProject';
  color! : string
  get status() : boolean {

    return this.service.isConnected
  }

  nbArticle! : number
  constructor(
    private service : FakeauthService,
    private demoService : DemoobservableService,
    private articleService: ArticleService
    ){}

  ngOnInit() {
    this.articleService.panierSubject.subscribe(
      {next : (quantity : number) =>
        this.nbArticle = quantity}
    )

    this.demoService.colorOBS.subscribe({
      next : (colorFromService : string) =>
        {
          this.color = colorFromService
        }
    })
  }
}
