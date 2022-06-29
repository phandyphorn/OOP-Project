import { KitchenManagement } from "../../kitchenManagement/kitchenManagement";
import { OrderStatus } from "../../menuManagement/Order";
import { Customer } from "../customer/Customer";
import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Waiter extends Staff {

    constructor(id: number, name: string, gender:Gender, phone:number, address:string)
    {
        super(StaffCategory.WAITER, id, name, gender, phone, address);
    }

    takeOrder(customer: Customer, kitchen: KitchenManagement) {
        let customerOrdered = customer.getOrdered();
        kitchen.addOrderFood(customerOrdered);
    }

    takeFoodToCustomer(kitchen: KitchenManagement, customers: Customer[]) {
        for (let customer of customers) {
            if (customer.isEqual(kitchen.foodAlreadyCooked[0].customer)) {
                for (let order of customer.orders) {
                    if (order.food.isEqual(kitchen.addFoodAlreadyCooked[0].food)) {
                        order.addStatus(OrderStatus.COMPLETED);
                    }
                };
            }
        }
        kitchen.foodAlreadyCooked.splice(0,1);
        kitchen.foodCooked.splice(0.1);
    }
    
}