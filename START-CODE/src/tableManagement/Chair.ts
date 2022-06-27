import { Customer } from '../hrManagement/customer/Customer';
export class Chair {
    private customer?: Customer = undefined;
    constructor(
        id: number
    ){}

    setCustomer(customer: Customer) {
        this.customer = customer;
    }

    hasCustomer() {
        return this.customer !== undefined;
    }

    removeCustomer(customer: Customer) {
        if (this.customer?.isEqual(customer)) {
            this.customer = undefined;
            return "Now this chair is free"
        }
    }

}