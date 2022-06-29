"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillManagement = void 0;
class BillManagement {
    constructor() {
        this.allCustomerOrders = [];
        this.allMenuInKitchen = [];
    }
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
    addOrderOfCustomer(...order) {
        this.allCustomerOrders = this.allCustomerOrders.concat(...order);
    }
}
exports.BillManagement = BillManagement;
