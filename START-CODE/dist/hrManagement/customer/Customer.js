"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const Person_1 = require("../Person");
class Customer extends Person_1.Person {
    constructor(id, name, gender, phone, address) {
        super(id, name, phone, gender, address);
        this.order = [];
    }
    isEqual(otherCustomer) {
        return this.id == otherCustomer.id;
    }
    addMenu(menu) {
        this.menu = menu;
    }
    orderFood(...food) {
        this.order = this.order.concat(...food);
    }
}
exports.Customer = Customer;
