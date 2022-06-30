"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillManagement = void 0;
const Order_1 = require("../menuManagement/Order");
class BillManagement {
    constructor() {
        this.allCustomerOrders = [];
    }
    addOrderOfCustomer(...order) {
        this.allCustomerOrders = this.allCustomerOrders.concat(...order);
    }
    getCustomerBill(customer) {
        let bill = customer.getName() + ' orders:' + "\n";
        let totalPrice = 0;
        for (let order of this.allCustomerOrders) {
            if (order.customer.isEqual(customer)) {
                if (order.getStatus() !== Order_1.OrderStatus.NOT_HAVE) {
                    bill = bill + ' - ' + order.food.getName() + ', price: ' + order.food.getPrice() + ', quality: ' + order.quaility + ',' + "\n";
                    totalPrice += order.getPrice();
                }
            }
        }
        return bill + ' Total price is: ' + totalPrice;
    }
    getPriceToPay(customer) {
        let totalPrice = 0;
        for (let order of this.allCustomerOrders) {
            if (order.customer.isEqual(customer)) {
                if (order.getStatus() !== Order_1.OrderStatus.NOT_HAVE) {
                    totalPrice += order.getPrice();
                }
            }
        }
        return totalPrice;
    }
    getIncome() {
        let totalPrice = 0;
        for (let order of this.allCustomerOrders) {
            if (order.getStatus() !== Order_1.OrderStatus.NOT_HAVE) {
                totalPrice += order.getPrice();
            }
        }
        return totalPrice;
    }
}
exports.BillManagement = BillManagement;
