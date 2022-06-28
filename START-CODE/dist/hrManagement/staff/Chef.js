"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chef = void 0;
const Staff_1 = require("./Staff");
class Chef extends Staff_1.Staff {
    constructor(staffCategory, id, name, gender, phone, address) {
        super(Staff_1.StaffCategory.CHEF, id, name, gender, phone, address);
    }
}
exports.Chef = Chef;
