"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["COMPLETED"] = "Completed";
    OrderStatus["NOT_COMPLETED"] = "Not Completed";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
class Order {
    constructor(food, quaility, customer) {
        this.food = food;
        this.quaility = quaility;
        this.customer = customer;
        this.status = OrderStatus.NOT_COMPLETED;
    }
    addStatus(status) {
        this.status = status;
    }
    getPrice() {
        return this.food.price * this.quaility;
    }
}
exports.Order = Order;
