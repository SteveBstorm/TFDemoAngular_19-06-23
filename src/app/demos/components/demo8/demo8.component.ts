import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/app/environment/environment';
import { ArticleAPI } from './articleAPI.model';
import { ApiService } from './api.service';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.css']
})
export class Demo8Component {

  private _url : string = environment.url

  listArticle! : ArticleAPI[]

  constructor(
    //private client : HttpClient
    private apiService : ApiService
    ){}

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    //this.client.get<ArticleAPI[]>(this._url+"article").subscribe({
    this.apiService.getAll().subscribe({
      next : (data : ArticleAPI[]) => this.listArticle = data,
      error : (error) => console.log(error.status),
      complete : () => console.log("C'est fini")
    })
  }

  postArticle() {
    let newA : ArticleAPI = {
      id: 3,
      label : "truc",
      price : 10,
      description : "toto"
    }
    this.apiService.post(newA).subscribe({
      next : () => this.loadData(),
      error : (error) => console.log(error) })
  }

}
