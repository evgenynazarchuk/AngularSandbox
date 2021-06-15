import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-display',
  templateUrl: './rating-display.component.html'
})
export class RatingDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rating = 0

  changeRating(message: boolean) {
    message == true ? this.rating++ : this.rating--
  }

}
