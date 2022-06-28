import { MenuManager } from "../../menuManagement/MenuManager";
import { Order } from "../../menuManagement/Order";
import { Person, Gender } from "../Person";

export class Customer extends Person{

    menu?: MenuManager;
    orders: Order[] = [];

    constructor(id: number, name: string, gender: Gender, phone:number, address:string)
    {
        super(id, name, phone, gender, address);
    }

    isEqual(otherCustomer: Customer) {
        return this.id == otherCustomer.id;
    }

    addMenu(menu: MenuManager) {
        this.menu = menu;
    }

    orderFood(...food: Order[]) {
        this.orders = this.orders.concat(...food);
    }

    getOrdered(): Order[] {
        return this.orders
    }



}