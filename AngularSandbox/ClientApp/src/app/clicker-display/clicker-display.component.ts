import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicker-display',
  templateUrl: './clicker-display.component.html'
})
export class ClickerDisplayComponent implements OnInit {

  constructor() { }

  clickCounter: number = 0

  onClick() {
    this.clickCounter++
  }

  ngOnInit(): void {
  }

}
