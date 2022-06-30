import { Gender, Person } from "../Person";

export enum StaffCategory {
    CHEF,
    WAITER
}
export class Staff extends Person {
    private salary: number = 0;
    constructor(
        protected staffCategory: StaffCategory, 
        id: number, 
        name: string, 
        gender: Gender , 
        phone: number, 
        address: string) {
        super(id, name, gender, phone, address);
    }

    setSalary(salary: number) {
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    
}