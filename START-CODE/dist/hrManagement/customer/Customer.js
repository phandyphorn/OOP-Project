"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const Person_1 = require("../Person");
class Customer extends Person_1.Person {
    constructor(id, name, gender, phone, address) {
        super(id, name, gender, phone, address);
        this.orders = [];
    }
    isEqual(otherCustomer) {
        return this.id == otherCustomer.id;
    }
    addMenu(menu) {
        this.menu = menu;
    }
    orderFood(...food) {
        this.orders = this.orders.concat(...food);
    }
    getOrdered() {
        return this.orders;
    }
    getPrice() {
        let totalPrice = 0;
        for (let order of this.orders) {
            totalPrice += order.getPrice();
        }
        return totalPrice;
    }
}
exports.Customer = Customer;
