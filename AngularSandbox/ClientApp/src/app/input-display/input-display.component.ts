import { Component } from '@angular/core';

@Component({
  selector: 'app-input-display',
  templateUrl: './input-display.component.html'
})
export class InputDisplayComponent {
  defaultMessageText: string = "any text"

  onChangeMessageText(message: string) {
    this.defaultMessageText = message
  }
}
