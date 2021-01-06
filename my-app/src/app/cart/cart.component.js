"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartComponent = void 0;
var core_1 = require("@angular/core");
var CartComponent = /** @class */ (function () {
    function CartComponent() {
        this.numberItem = 300;
        this.products = [
            {
                id: 1,
                name: 'MARSHALL STOCKWELL 2 BLUETOOTH',
                des: 'Vo Quang',
                price: 200,
                image: 'https://marshallhanoi.vn/wp-content/uploads/2020/06/pos-marshall-speakers-stockwell-ii-black-01-1-768x785.png',
                total: 200
            },
            {
                id: 2,
                name: 'MARSHALL MINOR 2',
                des: 'DQ',
                price: 129,
                image: 'https://marshallhanoi.vn/wp-content/uploads/2020/06/pos-marshall-minor-ii-black-01-768x785.png',
                total: 129
            },
            {
                id: 3,
                name: 'MARSHALL MAJOR 3 VOICE',
                des: 'DQ',
                price: 200,
                image: 'https://marshallhanoi.vn/wp-content/uploads/2020/06/marshall-major-iii-voice-black.png',
                total: 200
            },
        ];
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.removeProduct = function (id) {
        var index = this.products.findIndex(function (item) { return item.id === id; });
        this.products.splice(index, 1);
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.css']
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
