import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html'
})
export class ClickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  clickEvent = new EventEmitter()

  onClick() {
    this.clickEvent.emit()
  }
}
