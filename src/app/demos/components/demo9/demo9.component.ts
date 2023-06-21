import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { concatWith } from 'rxjs';
import { ApiService } from '../demo8/api.service';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.css']
})
export class Demo9Component {

  myFormGroup! : FormGroup

  constructor(
    private formBuilder : FormBuilder,
    private apiService : ApiService
  ){}

  listDesc : any[] = [
    {label : "Très bien", value : "tb"},
    {label : "Bien", value : "b"},
    {label : "Insuffisant", value : "i"},
  ]


  ngOnInit() {
    this.myFormGroup = this.formBuilder.group({
      id : [null, this.checkMin(10)],
      label : [null, Validators.required],
      price : [null, [Validators.min(0), Validators.required]],
      description : [null, []],
      commentaires : this.formBuilder.array([])
    })

    this.myFormGroup.controls["description"].setValidators(this.checkGroup(this.myFormGroup.controls["price"]))
  }

  checkGroup(price : AbstractControl) : ValidatorFn {
    return (toto : AbstractControl) => {
      console.log(price)
      if(toto.touched && price.value > 1000)
        toto.setValidators(Validators.required)
      if(toto.touched && price.value <= 1000)
        toto.removeValidators(Validators.required)
      return null
    }
  }

  checkMin(value : number) : ValidatorFn {
    return (control : AbstractControl) =>  {
      if(control.value < value) return {checkError : "la valeur minimum est " + value}
      return null
    }
  }

  submitForm() {
    this.apiService.post(this.myFormGroup.value)
    console.log(this.myFormGroup.value);

  }
}
