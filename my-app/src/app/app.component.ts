import { Component } from '@angular/core';
import { MockProducts } from 'src/mock-data/products.mock';
import { Product, CartItem } from './shared/models';

const mockCartItems: CartItem[] = MockProducts.map(e => ({
  product: e,
  quantity: 1
}))

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  numberItems: number = 5;
  tax:number = 10;
  title = 'Quang Vo';

  cartItems: CartItem[] = mockCartItems;

  get subTotal() {
    return this.cartItems
    .reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  get total() {
    return Math.round(this.subTotal * (1 + this.tax / 100));
  }

  removeCartItemFromCart(id: number) :void {
    // Remove from cart
    this.cartItems = this.cartItems.filter(item => item.product.id != id);
  }
}
