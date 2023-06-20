import { Component } from '@angular/core';
import { FakeauthService } from './demos/services/fakeauth.service';
import { DemoobservableService } from './demos/services/demoobservable.service';

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
  constructor(
    private service : FakeauthService,
    private demoService : DemoobservableService
    ){}

  ngOnInit() {
    this.demoService.colorOBS.subscribe({
      next : (colorFromService : string) =>
        {
          this.color = colorFromService
        }
    })
  }
}
