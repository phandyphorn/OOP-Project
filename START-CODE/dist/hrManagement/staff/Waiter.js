"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Waiter = void 0;
const Person_1 = require("../Person");
class Waiter extends Person_1.Person {
    constructor(id, name, gender, phone, address, salary) {
        super(id, name, phone, gender, address);
        this.salary = salary;
    }
}
exports.Waiter = Waiter;
