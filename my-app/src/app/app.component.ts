import { Component } from '@angular/core';
import { MockProducts } from 'src/mock-data/products.mock';
import { CartItem } from './shared/models';

const mockCartItems: CartItem[] = MockProducts.map(e => ({
  product: e,
  quantity: e.qty
}))

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tax:number = 10;
  title = 'Quang Vo';
  x:string = '';

  cartItems: CartItem[] = mockCartItems;

  get subTotal() {
    if(this.x == '') {
    return Math.round(this.cartItems
    .reduce((total, item) => total + item.product.price * item.quantity, 0));
    } else if(this.x == 'quang20%') {
      return Math.round(this.cartItems
      .reduce((total, item) => total + item.product.price * item.quantity, 0)*0.8);
    } else {
      return Math.round(this.cartItems
      .reduce((total, item) => total + item.product.price * item.quantity, 0));
    }
  }

  get total() {
    return Math.round(this.subTotal * (1 + this.tax / 100));
  }

  get discount() {
    if(this.x === 'quang20%'){
      return "20%";
    } else {
      return "0%";
    }
  }

  get message() {
    if(this.x === ''){
      return "* Bạn chưa nhập mã giảm giá !"
    }
    else if(this.x === 'quang20%'){
      return "* Mã hợp lệ !";
    } else {
      return "* Mã sai !";
    }
  }

  get subItem() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  submit(coupon) {
    this.x = coupon;
  }
}
