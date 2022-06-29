
import { Food } from "../kitchenManagement/Food";
import { Order } from "../menuManagement/Order";

export class BillManagement {
    allCustomerOrders : Order[] = [];
    allMenuInKitchen: Food[] = [];

    // getTotalIncome(): number{
    //    let customerOrders = this.allCustomerOrders;
    //    let totalIncome = 0;
    //    customerOrders.forEach(order=>{
    //         totalIncome += order.getPrice();
    //    })
    //    return totalIncome;
    // }

    // getTotalPrincipal(): number{
    //     let menuInKichen = this.allMenuInKitchen;
    //     let totalPrincipal = 0;
    //     menuInKichen.forEach(food=>{
    //         totalPrincipal += food.getPrice();
    //     })
    //     return totalPrincipal;
    // }

    // getRevenue(): number{
    //     return 2;
    // }

    addOrderOfCustomer (...order:Order[]) {
        this.allCustomerOrders = this.allCustomerOrders.concat(...order);
    }
}   