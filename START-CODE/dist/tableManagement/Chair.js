"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chair = void 0;
class Chair {
    constructor(id) {
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
            this.customer = undefined;
            return "Now this chair is free";
        }
    }
}
exports.Chair = Chair;
