import { MenuManager } from "../../menuManagement/MenuManager";
import { Person, Gender } from "../Person";

export class Customer extends Person{

    private menu?: MenuManager;
    private paying: boolean = false;

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

    pay(paidPrice: number, priceToPay: number) {
        if (priceToPay > paidPrice) {
            return 'Not enough you need to pay more';
        }else {
            this.paying = true;
            return 'Thank you !!';
        }
    }
    getPaying() {
        return this.paying;
    }

}