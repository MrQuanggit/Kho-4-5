import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../shared/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() products: CartItem[];
  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeProduct(id: number) :void {
    const index = this.products.findIndex(e => e.product.id == id);
    this.products.splice(index, 1); 
  }

  decreseProduct(cartItem: CartItem) {
    if(cartItem.quantity <= 1) return;
    cartItem.quantity--;
  }

  increseProduct(cartItem: CartItem) {
    cartItem.quantity++;
  }
}

