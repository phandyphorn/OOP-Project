import { Restaurant } from "./Restaurant";
import { Gender} from "./hrManagement/Person";
import { Customer } from "./hrManagement/customer/Customer";
import { Food } from "./kitchenManagement/Food";
import { Chair } from "./tableManagement/Chair";
import { Table } from "./tableManagement/Table";
import { Staff, StaffCategory } from "./hrManagement/staff/Staff";
import { Dessert } from "./kitchenManagement/food/Dessert";
import { Meal } from "./kitchenManagement/food/Meal";
import { Drink } from "./kitchenManagement/food/Drink";


/**
 * Create restaurant object using Restaurant class
 */
let vyDyRestaurant = new Restaurant('VyDyRestaurant', '1 street 473', 'VyDy');


/**
 * Create Customer using Person Class
 * Daro and Dary are customers.
 */
let daro = new Customer(1, 'Daro', Gender.MALE, 962517455, 'Phnom Penh');
let dary = new Customer(1, 'Dary', Gender.FEMALE, 962517455, 'Phnom Penh');


/**
 * Create chairs using Chair Class
 */
let chair1 = new Chair(1);
let chair2 = new Chair(2);
let chair3 = new Chair(3);
let chair4 = new Chair(4);


/**
 * Create table usiing Table Class
 */
let table1 = new Table(1);
let table2 = new Table(2);

/**
 * Add Customers To Chair;
 */
chair1.setCustomer(daro);
chair2.setCustomer(dary);


/**
 * Add Chairs to Table
 */
table1.addChair(chair1, chair2);
table2.addChair(chair3, chair4)


/**
 * Add table to table management
 */
vyDyRestaurant.tables.addTable(table1, table2);
console.log(vyDyRestaurant);


