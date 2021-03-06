
import { Customer } from "../hrManagement/customer/Customer";
import { Order, OrderStatus } from "../menuManagement/Order";

export class BillManagement {
    allCustomerOrders : Order[] = [];

    addOrderOfCustomer (...order:Order[]) {
        this.allCustomerOrders = this.allCustomerOrders.concat(...order);
    }

    getCustomerBill(customer: Customer) {
        let bill = customer.getName() + ' orders:' + "\n";
        let totalPrice = 0;
        for (let order of this.allCustomerOrders) {
            if (order.customer.isEqual(customer)) {
                if (order.getStatus() !== OrderStatus.NOT_HAVE) {
                    bill = bill + ' - ' + order.food.getName() + ', price: ' + order.food.getPrice() + ', quality: ' + order.quaility + ',' + "\n";
                    totalPrice += order.getPrice();
                }
            }
        }
        return bill + ' Total price is: ' + totalPrice;
    }
    getPriceToPay(customer: Customer) {
        let totalPrice = 0;
        for (let order of this.allCustomerOrders) {
            if (order.customer.isEqual(customer)) {
                if (order.getStatus() !== OrderStatus.NOT_HAVE) {
                    totalPrice += order.getPrice();
                }
            }
        }
        return totalPrice;
    }
    getIncome() {
        let totalPrice = 0;
        for (let order of this.allCustomerOrders) {
            if (order.getStatus() !== OrderStatus.NOT_HAVE) {
                totalPrice += order.getPrice();
            }
        }
        return totalPrice;
    }


}   