import { MenuManager } from "../../menuManagement/MenuManager";
import { Person, Gender } from "../Person";

export class Customer extends Person{

    menu?: MenuManager;

    constructor(id: number, name: string, gender: Gender,phone:number, address:string)
    {
        super(id, name,gender, phone, address);
    }

    isEqual(otherCustomer: Customer) {
        return this.id == otherCustomer.id;
    }

    takeMenu(menu: MenuManager) {
        this.menu = menu;
    }

    getName() {
        return this.name;
    }

}