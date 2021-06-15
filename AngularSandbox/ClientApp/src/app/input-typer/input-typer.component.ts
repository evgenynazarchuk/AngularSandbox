import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-typer',
  templateUrl: './input-typer.component.html'
})
export class InputTyperComponent {

  @Input()
  messageText: string = ""

  @Output()
  messageTextChange = new EventEmitter<string>()

  onChangeMessageText(message: string) {
    this.messageText = message
    this.messageTextChange.emit(message)
  }

}
