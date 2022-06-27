"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chef = void 0;
const Person_1 = require("../Person");
class Chef extends Person_1.Person {
    constructor(id, name, gender, phone, address, salary) {
        super(id, name, phone, gender, address);
        this.salary = salary;
    }
}
exports.Chef = Chef;
