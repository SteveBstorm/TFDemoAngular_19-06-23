import { Component } from '@angular/core';
import { FakeauthService } from '../../services/fakeauth.service';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.css']
})
export class Demo6Component {

  get status() : boolean {
    return this.fakeService.isConnected
  }

  constructor(
    private fakeService : FakeauthService
  ){}
  // ngOnInit() {
  //   this.status = this.fakeService.isConnected
  // }
  login() {
    this.fakeService.login()
    // this.status = this.fakeService.isConnected
  }
  logout() {
    this.fakeService.logout()
    // this.status = this.fakeService.isConnected

  }
}
