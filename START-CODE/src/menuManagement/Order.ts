import { Customer } from "../hrManagement/customer/Customer";
import { Waiter } from "../hrManagement/staff/Waiter";
import { MenuItem } from "./MenuItem";

export enum OrderStatus{
    COMPLETED = 'Completed',
    NOT_COMPLETED = 'Not Completed',
    NOT_HAVE = 'Not Have'
}
export class Order {
    public status: OrderStatus = OrderStatus.NOT_COMPLETED;
    constructor(public food: MenuItem, public quaility: number, public customer: Customer, public waiter: Waiter){}

    addStatus(status: OrderStatus) {
        this.status = status;
    }

    getPrice(): number{
        return this.food.price * this.quaility;
    }

    getStatus() {
        return this.status;
    }



}
