import { Restaurant } from "./Restaurant";
import { Gender} from "./hrManagement/Person";
import { Customer } from "./hrManagement/customer/Customer";
import { FoodCategory } from "./kitchenManagement/Food";
import { Chair } from "./tableManagement/Chair";
import { Table } from "./tableManagement/Table";
import { Meal } from "./kitchenManagement/food/Meal";
import { Drink } from "./kitchenManagement/food/Drink";
import { Dessert } from "./kitchenManagement/food/Dessert";
import { Staff, StaffCategory } from "./hrManagement/staff/Staff";
import { Order } from "./menuManagement/Order";
import { ItemName, MenuItem } from "./menuManagement/MenuItem";
import { Waiter } from "./hrManagement/staff/Waiter";
import { BillManagement } from "./billManagement/BillManagement";
import { Chef } from "./hrManagement/staff/Chef";


/**
 * Create restaurant object using Restaurant class
 */
let vyDyRestaurant = new Restaurant('VyDyRestaurant', '1 street 473', 'VyDy');


/**
 * Create Customer using Person Class
 * Daro and Dary are customers.
 */
let daro = new Customer(1, 'Daro', Gender.MALE, 962517455, 'Phnom Penh');
let dary = new Customer(3, 'Dary', Gender.FEMALE, 962517455, 'Phnom Penh');


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
// console.log(vyDyRestaurant);


/**
 *  Create Staff using Staff class
 *  Malin, Malis are chefs
 */
let malin = new Staff(StaffCategory.CHEF,1,"Malin", Gender.FEMALE, 962517455, '2-street-374');
let mala = new Staff(StaffCategory.CHEF,2,"Mala", Gender.MALE,719675309,'2 347 street');

/**
 * Create Waiter using Staff Class
 * Lary and Lara
 */
let lary = new Staff(StaffCategory.WAITER,1,"Lary", Gender.FEMALE, 962517455, '2-street-374');
let lara = new Staff(StaffCategory.WAITER,2,"Lara", Gender.MALE,719675309,'2 347 street');

/**
 * At Customer to customers
 * At Staff to staffs
 */
vyDyRestaurant.humanResoure.addCustomer(daro, dary);
vyDyRestaurant.humanResoure.addStaff(malin, mala, lary,lara);

/**
 * Creat menu of food only in the kitchen
 * 3 desserts, 3 meals and 3 drinks
 */
 let banana = new Dessert(ItemName.BANANA, 1000, 10);
 let duran = new Dessert(ItemName.DURAN, 8000, 3);
 
 let beefRice = new Meal(ItemName.BEEFRICE, 5000, 5);
 let chickenRice = new Meal(ItemName.CHICKENRICE, 5000, 2);
 
 let coca = new Drink(ItemName.COCA, 2000, 20);
 let orange = new Drink(ItemName.ORANGE, 4000,5);

/**
 * Add Meals, Drinks, and Desserts into Kitchen
 */
vyDyRestaurant.kitchen.addFoodToKitchen(beefRice);
vyDyRestaurant.kitchen.addFoodToKitchen(beefRice);
vyDyRestaurant.kitchen.addFoodToKitchen(chickenRice);
vyDyRestaurant.kitchen.addFoodToKitchen(orange);
vyDyRestaurant.kitchen.addFoodToKitchen(duran);
vyDyRestaurant.kitchen.addFoodToKitchen(banana);
vyDyRestaurant.kitchen.addFoodToKitchen(coca);

/**
 * Create Item of menu
 */
let bananaM = new MenuItem(ItemName.BANANA, 5000,FoodCategory.DESSERT);
let duranM = new MenuItem(ItemName.DURAN, 10000, FoodCategory.DESSERT);

let beefRiceM = new MenuItem(ItemName.BEEFRICE, 10000,FoodCategory.MEAL);
let chickenRiceM = new MenuItem(ItemName.CHICKENRICE, 10000, FoodCategory.MEAL);

let cocaM = new MenuItem(ItemName.COCA, 5000,FoodCategory.DRINK);
let orangeM = new MenuItem(ItemName.ORANGE, 5000,FoodCategory.DRINK);

/**
 * Add all Item to menu
 */
vyDyRestaurant.menu.addMenuItem(bananaM);
vyDyRestaurant.menu.addMenuItem(cocaM);

/**
 * Create customer order foods.
 */
let daryOrder1 = new Order(orangeM,3, dary, lara as Waiter);
let daryOrder2 = new Order(chickenRiceM,1,dary, lara as Waiter);
let daroOrder1 = new Order (duranM,1, daro, lary as Waiter);
let daroOrder2 = new Order(beefRiceM,2, daro, lary as Waiter);

// dary.orderFood(daryOrder1,daryOrder2);
// daro.orderFood(daroOrder1, daroOrder2);

// console.log(dary.getPrice());


/**
 * Customer order foods
 * Dary order orangeOrder, chickenRiceOrder
 * Daro order two beers, two beefRices and two bananas
 */

// console.log(dary.getOrdered());

let billM = new BillManagement();
billM.addOrderOfCustomer(  daryOrder1, daryOrder2, daroOrder1, daroOrder2);

let chef = new Chef(6, 'dy', Gender.FEMALE, 9875678, 'pp');
// console.log(vyDyRestaurant);
// console.log(billM.allCustomerOrders);
// console.log(vyDyRestaurant.kitchen.meal);
// console.log(vyDyRestaurant.kitchen.drinks);
// console.log(vyDyRestaurant.kitchen.desserts);


console.log(chef.cookFoodFrom(billM.allCustomerOrders, vyDyRestaurant.kitchen));
console.log(chef.cookFoodFrom(billM.allCustomerOrders, vyDyRestaurant.kitchen));
console.log(chef.cookFoodFrom(billM.allCustomerOrders, vyDyRestaurant.kitchen));
console.log(chef.cookFoodFrom(billM.allCustomerOrders, vyDyRestaurant.kitchen));
console.log(billM.getCustomerBill(daro));
console.log(billM.getCustomerBill(dary));

// console.log(vyDyRestaurant.kitchen.getPrincipalOfMeal());
// console.log(vyDyRestaurant.kitchen.getPrincipalOfDessert());
// console.log(vyDyRestaurant.kitchen.getPrincipalOfDrink());







