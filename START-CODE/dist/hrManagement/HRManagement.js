"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HRManagement = void 0;
class HRManagement {
    constructor() {
        this.customers = [];
        this.staffs = [];
    }
    addCustomer(...customer) {
        this.customers = this.customers.concat(...customer);
    }
    getCustomers() {
        return this.customers;
    }
    addStaff(...staff) {
        this.staffs = this.staffs.concat(...staff);
    }
    getStaffs() {
        return this.staffs;
    }
}
exports.HRManagement = HRManagement;
