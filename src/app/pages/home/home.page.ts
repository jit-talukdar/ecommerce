import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cartItems = 0;
  slideOpts = {
    autoplay: {
      delay: 2000,
    },
    zoom: false,
    effect: 'flip'
  };
  sliderConfig = {
    zoom: false,
    slidesPerView: 1.8,
    spaceBetween: 10,
    centeredSlides: false
  };

  constructor(public cart: CartService) {
    this.cart.getCartTotal().subscribe(val => {
      this.cartItems = val;
    });
  }

  addCart() {
    const itemCount = this.cartItems + 1;
    this.cart.setCartTotal(itemCount);

  }
}
