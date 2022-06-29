"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Waiter = void 0;
const Order_1 = require("../../menuManagement/Order");
const Staff_1 = require("./Staff");
class Waiter extends Staff_1.Staff {
    constructor(id, name, gender, phone, address) {
        super(Staff_1.StaffCategory.WAITER, id, name, gender, phone, address);
    }
    takeOrder(customer, kitchen) {
        let customerOrdered = customer.getOrdered();
        kitchen.addOrderFood(customerOrdered);
    }
    takeFoodToCustomer(kitchen, customers) {
        for (let customer of customers) {
            if (customer.isEqual(kitchen.foodAlreadyCooked[0].customer)) {
                for (let order of customer.orders) {
                    if (order.food.isEqual(kitchen.addFoodAlreadyCooked[0].food)) {
                        order.addStatus(Order_1.OrderStatus.COMPLETED);
                    }
                }
                ;
            }
        }
        kitchen.foodAlreadyCooked.splice(0, 1);
        kitchen.foodCooked.splice(0.1);
    }
}
exports.Waiter = Waiter;
