import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent {
  @Input() question! : string

  @Output() responseEvent : EventEmitter<boolean>
                      = new EventEmitter<boolean>()

  envoiReponse(resp : string) {
    this.responseEvent.emit(resp == "oui")
  }
}


