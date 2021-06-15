import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-clicker',
  templateUrl: './rating-clicker.component.html'
})
export class RatingClickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  eventChangeRating = new EventEmitter<boolean>()

  changeRating(value: boolean) {
    this.eventChangeRating.emit(value)
  }

}
