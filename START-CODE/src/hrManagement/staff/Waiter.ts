import { KitchenManagement } from "../../kitchenManagement/kitchenManagement";
import { Customer } from "../customer/Customer";
import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Waiter extends Staff {

    constructor(staffCategory: StaffCategory, id: number, name: string, gender:Gender, phone:number, address:string)
    {
        super(StaffCategory.WAITER, id, name, gender, phone, address);
    }

    takeOrder(customer: Customer, kitchen: KitchenManagement) {
        let customerOrdered = customer.getOrdered();
        kitchen.addOrderFood(customerOrdered);
    }
    
}