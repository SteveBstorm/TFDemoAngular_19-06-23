import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { ArticleAPI } from './articleAPI.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url : string = environment.url
  constructor(
    private client : HttpClient
  ) { }

  getAll() : Observable<ArticleAPI[]> {
    return this.client.get<ArticleAPI[]>(this.url+"article")
  }

  getById(id : number) : Observable<ArticleAPI> {
    return this.client.get<ArticleAPI>(this.url+"article/"+id)
  }

  post(a : ArticleAPI) : Observable<any>{
    return this.client.post<any>(this.url+"article", a)

  }
}
