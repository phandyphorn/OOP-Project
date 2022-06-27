import { Menu } from "../../menuManagement/Menu";
import { Order } from "../../menuManagement/Order";
import { Person, Gender } from "../Person";

export class Customer extends Person{

    menu?: Menu;
    order: Order[] = [];

    constructor(id: number, name: string, gender: Gender, phone:number, address:string)
    {
        super(id, name, phone, gender, address);
    }

    isEqual(otherCustomer: Customer) {
        return this.id == otherCustomer.id;
    }

    addMenu(menu: Menu) {
        this.menu = menu;
    }

    orderFood(...food: Order[]) {
        this.order = this.order.concat(...food);
    }

}