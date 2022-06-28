import { Customer } from "../hrManagement/customer/Customer";
import { MenuItem } from "./MenuItem";

export enum OrderStatus{
    COMPLETED,
    NOT_COMPLETED
}
export class Order {
    public status: OrderStatus = OrderStatus.NOT_COMPLETED;
    constructor(public food: MenuItem, public quaility: number, public customer: Customer){}

    addStatus(status: OrderStatus) {
        this.status = status;
    }

}