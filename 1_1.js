"use strict";

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    return this.price = this.price * 0.75;
}

let my_product = new Product('TV', 20000);

console.log(my_product.name);
console.log(my_product.price);
console.log(my_product.make25PercentDiscount());

class Product1 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        return this.price = this.price * 0.75;
    }
}

let my_product1 = new Product1('PC', 50000);

console.log(my_product1.name);
console.log(my_product1.price);
console.log(my_product1.make25PercentDiscount());