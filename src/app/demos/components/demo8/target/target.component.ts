import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleAPI } from '../articleAPI.model';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent {
  myFormGroup! : FormGroup
  constructor(
    private ar : ActivatedRoute,
    private service : ApiService,
    private formBuilder : FormBuilder
    ){}
  id! : number
  currentArticle! : ArticleAPI
  ngOnInit() {
    this.id = this.ar.snapshot.params["id"]


    this.currentArticle = this.ar.snapshot.data["resolvedArticle"]

    // this.service.getById(this.id).subscribe({
    //   next : (a : ArticleAPI) => {
    //     this.currentArticle = a
        this.myFormGroup = this.formBuilder.group({
          id : [this.currentArticle.id],
          label : [this.currentArticle.label, Validators.required],
          price : [this.currentArticle.price, [Validators.min(0), Validators.required]],
          description : [this.currentArticle.description, []],
          commentaires : this.formBuilder.array([])
        })
    //   }
    //  })


  }
}
