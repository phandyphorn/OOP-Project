"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const Person_1 = require("../Person");
class Customer extends Person_1.Person {
    constructor(id, name, gender, phone, address) {
        super(id, name, gender, phone, address);
        this.paying = false;
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
    pay(paidPrice, priceToPay) {
        if (priceToPay > paidPrice) {
            return 'Not enough you need to pay more';
        }
        else {
            this.paying = true;
            return 'Thank you !!';
        }
    }
    getPaying() {
        return this.paying;
    }
}
exports.Customer = Customer;
