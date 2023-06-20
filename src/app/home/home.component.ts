import { Component } from '@angular/core';
import { FakeauthService } from '../demos/services/fakeauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  get status() : boolean {
    return this.fakeService.isConnected
  }

  color! : string

  constructor(
    private fakeService : FakeauthService
  ){}

  // ngOnInit() {
  //   this.status = this.fakeService.isConnected
  // }
}
