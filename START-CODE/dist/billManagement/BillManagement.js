"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillManagement = void 0;
class BillManagement {
    constructor() {
        this.allCustomerOrders = [];
        this.allMenuInKitchen = [];
    }
    getTotalIncome() {
        let customerOrders = this.allCustomerOrders;
        let totalIncome = 0;
        customerOrders.forEach(order => {
            totalIncome += order.food.getPrice();
        });
        return totalIncome;
    }
    getTotalPrincipal() {
        let menuInKichen = this.allMenuInKitchen;
        let totalPrincipal = 0;
        menuInKichen.forEach(food => {
            totalPrincipal += food.getPrice();
        });
        return totalPrincipal;
    }
    getRevenue() {
        return 2;
    }
    addOrder(...order) {
        this.allCustomerOrders = this.allCustomerOrders.concat(...order);
    }
}
exports.BillManagement = BillManagement;
