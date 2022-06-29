"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const Person_1 = require("../Person");
class Customer extends Person_1.Person {
    constructor(id, name, gender, phone, address) {
        super(id, name, gender, phone, address);
    }
    isEqual(otherCustomer) {
        return this.id == otherCustomer.id;
    }
    takeMenu(menu) {
        this.menu = menu;
    }
    getName() {
        return this.name;
    }
}
exports.Customer = Customer;
