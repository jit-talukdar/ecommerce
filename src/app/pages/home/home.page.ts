import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    effect: 'flip'
  };
  sliderConfig = {
    slidesPerView: 1.8,
    spaceBetween: 2,
    centeredSlides: false
  };
}
