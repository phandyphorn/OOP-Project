"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Waiter = void 0;
const Staff_1 = require("./Staff");
class Waiter extends Staff_1.Staff {
    constructor(id, name, gender, phone, address) {
        super(Staff_1.StaffCategory.WAITER, id, name, gender, phone, address);
    }
}
exports.Waiter = Waiter;
