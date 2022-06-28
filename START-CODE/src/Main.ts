import { Restaurant } from "./Restaurant";
import { KitchenManagement } from "./kitchenManagement/kitchenManagement";
import { Gender} from "./hrManagement/Person";
import { Customer } from "./hrManagement/customer/Customer";
import { Food, FoodCategory } from "./kitchenManagement/Food";
import { Chair } from "./tableManagement/Chair";
import { Table } from "./tableManagement/Table";
import { Meal } from "./kitchenManagement/food/Meal";
import { Drink } from "./kitchenManagement/food/Drink";
import { Dessert } from "./kitchenManagement/food/Dessert";
import { Staff, StaffCategory } from "./hrManagement/staff/Staff";
import { Order } from "./menuManagement/Order";
import { ItemName, MenuItem } from "./menuManagement/MenuItem";


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
 let banana = new Dessert('Banana', 1000, 10, FoodCategory.DESSERT);
 let duran = new Dessert('Duran', 8000, 3, FoodCategory.DESSERT);
 
 let beefRice = new Meal('Beef and Rice', 7000, 5,FoodCategory.MEAL);
 let chickenRice = new Meal('Chicken and Rice', 6000,2, FoodCategory.MEAL);
 
 let coca = new Drink('Coca', 2000, 20, FoodCategory.DRINK);
 let orange = new Drink('Orange', 4000,5,FoodCategory.DRINK);

/**
 * Add Meals, Drinks, and Desserts into Kitchen
 */
vyDyRestaurant.kitchen.addMeal(beefRice,chickenRice);
vyDyRestaurant.kitchen.addDessert(banana,duran);
vyDyRestaurant.kitchen.addDrink(coca,orange);

/**
 * Create Item of menu
 */
let bananaM = new MenuItem(ItemName.BANANA, 1000,FoodCategory.DESSERT);
let duranM = new MenuItem(ItemName.DURAN, 8000, FoodCategory.DESSERT);

let beefRiceM = new MenuItem(ItemName.BEEFRICE, 7000,FoodCategory.MEAL);
let chickenRiceM = new MenuItem(ItemName.CHICKENRICE, 6000, FoodCategory.MEAL);

let cocaM = new MenuItem(ItemName.COCA, 2000,FoodCategory.DRINK);
let orangeM = new MenuItem(ItemName.ORANGE, 4000,FoodCategory.DRINK);

/**
 * Add all Item to menu
 */
vyDyRestaurant.menu.addMenuItem(
    bananaM,
    duranM, 
    beefRiceM, 
    chickenRiceM, 
    cocaM, 
    orangeM
);

/**
 * Create Orders for customer
 */
let orangeOrder = new Order(orangeM,1);
let chickenRiceOrder = new Order(chickenRiceM,1);
let duranOrder = new Order (duranM, 1);
let beefRiceOrder = new Order(beefRiceM,2);


/**
 * Customer order foods
 * Dary order orangeOrder, chickenRiceOrder
 * Daro order two beers, two beefRices and two bananas
 */
dary.orderFood(orangeOrder, chickenRiceOrder);
daro.orderFood(duranOrder,  beefRiceOrder);
console.log(dary.getOrdered());

vyDyRestaurant.bill.

console.log(vyDyRestaurant.kitchen.getPrincipalOfMeal());
console.log(vyDyRestaurant.kitchen.getPrincipalOfDessert());
console.log(vyDyRestaurant.kitchen.getPrincipalOfDrink());







