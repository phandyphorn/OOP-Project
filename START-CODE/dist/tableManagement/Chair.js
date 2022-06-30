"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chair = void 0;
class Chair {
    constructor(id) {
        this.id = id;
        this.customer = undefined;
    }
    setCustomer(customer) {
        this.customer = customer;
    }
    hasCustomer() {
        return this.customer !== undefined;
    }
    removeCustomer(customer) {
        var _a;
        if ((_a = this.customer) === null || _a === void 0 ? void 0 : _a.isEqual(customer)) {
            if (customer.getPaying()) {
                this.customer = undefined;
                return "Now this chair is free";
            }
            else {
                return 'You need to pay us before you leave';
            }
        }
    }
}
exports.Chair = Chair;
