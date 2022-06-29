"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = exports.StaffCategory = void 0;
const Person_1 = require("../Person");
var StaffCategory;
(function (StaffCategory) {
    StaffCategory[StaffCategory["CHEF"] = 0] = "CHEF";
    StaffCategory[StaffCategory["WAITER"] = 1] = "WAITER";
})(StaffCategory = exports.StaffCategory || (exports.StaffCategory = {}));
class Staff extends Person_1.Person {
    constructor(staffCategory, id, name, gender, phone, address) {
        super(id, name, gender, phone, address);
        this.staffCategory = staffCategory;
        this.salary = 0;
    }
}
exports.Staff = Staff;
