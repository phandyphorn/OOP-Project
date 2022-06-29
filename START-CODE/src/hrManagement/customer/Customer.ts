import { MenuManager } from "../../menuManagement/MenuManager";
import { Order, OrderStatus } from "../../menuManagement/Order";
import { Person, Gender } from "../Person";
import { Waiter } from "../staff/Waiter";

export class Customer extends Person{

    menu?: MenuManager;
    // orders: Order[] = [];

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

    // orderFood(food: Order[], waiter: Waiter) {

    // }

    // addOrderFood(...food: Order[]) {
    //     this.orders = this.orders.concat(...food);
    // }

    // getOrdered(): Order[] {
    //     return this.orders
    // }

    // getPrice(): number {
    //     let totalPrice = 0;
    //     for (let order of this.orders) {
    //         if (!(order.status == OrderStatus.NOT_HAVE)) {
    //             totalPrice += order.getPrice();
    //         }
    //     }
    //     return totalPrice;
    // }
}