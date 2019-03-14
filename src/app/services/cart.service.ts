import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartTotal = new BehaviorSubject(0);

  constructor() { }

  getCartTotal() {
    return this.cartTotal;
  }

  setCartTotal(totalItem: number) {
    this.cartTotal.next(totalItem);
  }
}
