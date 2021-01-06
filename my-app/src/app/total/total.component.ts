import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  @Input() numberItems;
  @Input() subTotal;
  @Input() total;

  constructor() { }

  ngOnInit(): void {
  }

}
