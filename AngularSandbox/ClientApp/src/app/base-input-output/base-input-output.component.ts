import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-input-output',
  templateUrl: './base-input-output.component.html'
})
export class BaseInputOutputComponent implements OnInit {

  textMessage: string = ""
  testFlag: boolean = true
  counter: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  incrementCounter() {
    this.counter += 1
  }

}
