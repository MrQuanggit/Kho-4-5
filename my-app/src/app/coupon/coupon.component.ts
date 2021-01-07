import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  @Output() coupon = new EventEmitter();
  @Input() message;

  constructor() { }

  ngOnInit(): void {
  }

  submit(coupon) {
    this.coupon.emit(coupon);
  }
}
