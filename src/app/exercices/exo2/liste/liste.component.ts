import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {

  @Input() listEnfant : string[] = []

  @Output() retirerEvent : EventEmitter<number> =
                        new EventEmitter<number>()

  retirerEnfant(index : number) {
    this.retirerEvent.emit(index)
  }
}
