
import { Order } from "../../menuManagement/Order";
import { Person, Gender } from "../Person";

export class Customer extends Person{
    orders: Order[] = [];

    constructor(id: number, name: string, gender: Gender,phone:number, address:string)
    {
        super(id, name,gender, phone, address);
    }

    isEqual(otherCustomer: Customer) {
        return this.id == otherCustomer.id;
    }

    orderFood(...food: Order[]) {
        this.orders = this.orders.concat(...food);
    }

    getOrdered(): Order[] {
        return this.orders
    }

    
}