import { Customer } from "../hrManagement/customer/Customer";
import { MenuItem } from "./MenuItem";

export enum OrderStatus{
    COMPLETED = 'Completed',
    NOT_COMPLETED = 'Not Completed'
}
export class Order {
    public status: OrderStatus = OrderStatus.NOT_COMPLETED;
    constructor(public food: MenuItem, public quaility: number, public customer: Customer){}

    addStatus(status: OrderStatus) {
        this.status = status;
    }

    getPrice(): number{
        return this.food.price * this.quaility;
    
    }



}
