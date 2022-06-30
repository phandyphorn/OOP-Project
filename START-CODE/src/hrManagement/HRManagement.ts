import { Customer } from "./customer/Customer";
import { Staff } from "./staff/Staff";

export class HRManagement {
    private customers: Customer[] = [];
    private staffs: Staff[] = []

    addCustomer(...customer: Customer[]) {
        this.customers = this.customers.concat(...customer);
    }

    getCustomers(): Customer[] {
        return this.customers;
    }

    getNumberOfStaffs() {
        return this.staffs.length;
    }
    
    getNumberOfCustomers() {
        return this.customers.length;
    }

    addStaff(...staff: Staff[]) {
        this.staffs = this.staffs.concat(...staff);
    } 

    getStaffs(): Staff[] {
        return this.staffs;
    }
}