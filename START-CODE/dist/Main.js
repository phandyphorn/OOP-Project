"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Restaurant_1 = require("./Restaurant");
const Person_1 = require("./hrManagement/Person");
const Customer_1 = require("./hrManagement/customer/Customer");
const Food_1 = require("./kitchenManagement/Food");
const Chair_1 = require("./tableManagement/Chair");
const Table_1 = require("./tableManagement/Table");
const Meal_1 = require("./kitchenManagement/food/Meal");
const Drink_1 = require("./kitchenManagement/food/Drink");
const Dessert_1 = require("./kitchenManagement/food/Dessert");
const Staff_1 = require("./hrManagement/staff/Staff");
const Order_1 = require("./menuManagement/Order");
const MenuItem_1 = require("./menuManagement/MenuItem");
const BillManagement_1 = require("./billManagement/BillManagement");
const Chef_1 = require("./hrManagement/staff/Chef");
/**
 * Create restaurant object using Restaurant class
 */
let vyDyRestaurant = new Restaurant_1.Restaurant('VyDyRestaurant', '1 street 473', 'VyDy');
/**
 * Create Customer using Person Class
 * Daro, Niroth and Dary are customers.
 */
let daro = new Customer_1.Customer(1, 'Daro', Person_1.Gender.MALE, 962517455, 'Phnom Penh');
let niroth = new Customer_1.Customer(1, 'Niroth', Person_1.Gender.FEMALE, 964743586, 'Phnom Penh');
let dary = new Customer_1.Customer(2, 'Dary', Person_1.Gender.FEMALE, 889708156, 'Phnom Penh');
/**
 * Create chairs using Chair Class
 */
let chair1 = new Chair_1.Chair(1);
let chair2 = new Chair_1.Chair(2);
let chair3 = new Chair_1.Chair(3);
let chair4 = new Chair_1.Chair(4);
let chair5 = new Chair_1.Chair(5);
let chair6 = new Chair_1.Chair(6);
let chair7 = new Chair_1.Chair(7);
let chair8 = new Chair_1.Chair(8);
/**
 * Create table usiing Table Class
 */
let table1 = new Table_1.Table(1);
let table2 = new Table_1.Table(2);
/**
 * Add table to table management
 */
vyDyRestaurant.tables.addTable(table1, table2);
/**
 * Add Chairs to Table
 */
table1.addChair(chair1);
table1.addChair(chair2);
table1.addChair(chair3);
table1.addChair(chair4);
table2.addChair(chair5);
table2.addChair(chair6);
table2.addChair(chair7);
table2.addChair(chair8);
/**
 * Add Customers To Chair;
 */
chair1.setCustomer(daro);
chair2.setCustomer(dary);
chair5.setCustomer(niroth);
/**
 *  Create Staff using Staff class
 *  Malin, Malis are chefs
 */
let malin = new Staff_1.Staff(Staff_1.StaffCategory.CHEF, 1, "Malin", Person_1.Gender.FEMALE, 962517455, '2-street-374');
let mala = new Staff_1.Staff(Staff_1.StaffCategory.CHEF, 2, "Mala", Person_1.Gender.MALE, 719675309, '2 347 street');
/**
 * Create Waiter using Staff Class
 * Lary and Lara
 */
let lary = new Staff_1.Staff(Staff_1.StaffCategory.WAITER, 1, "Lary", Person_1.Gender.FEMALE, 962517455, '2-street-374');
let lara = new Staff_1.Staff(Staff_1.StaffCategory.WAITER, 2, "Lara", Person_1.Gender.MALE, 719675309, '2 347 street');
/**
 * At Customer to customers
 * At Staff to staffs
 */
vyDyRestaurant.humanResoure.addCustomer(daro, dary);
vyDyRestaurant.humanResoure.addStaff(malin, mala, lary, lara);
/**
 * Creat menu of food only in the kitchen
 * 3 desserts, 3 meals and 3 drinks
 */
let banana = new Dessert_1.Dessert(MenuItem_1.ItemName.BANANA, 1000, 10);
let duran = new Dessert_1.Dessert(MenuItem_1.ItemName.DURAN, 8000, 3);
let beefRice = new Meal_1.Meal(MenuItem_1.ItemName.BEEFRICE, 5000, 5);
let chickenRice = new Meal_1.Meal(MenuItem_1.ItemName.CHICKENRICE, 5000, 2);
let coca = new Drink_1.Drink(MenuItem_1.ItemName.COCA, 2000, 20);
let orange = new Drink_1.Drink(MenuItem_1.ItemName.ORANGE, 4000, 5);
/**
 * Add Meals, Drinks, and Desserts into Kitchen
 */
vyDyRestaurant.kitchen.addFoodToKitchen(beefRice);
vyDyRestaurant.kitchen.addFoodToKitchen(chickenRice);
vyDyRestaurant.kitchen.addFoodToKitchen(orange);
vyDyRestaurant.kitchen.addFoodToKitchen(duran);
vyDyRestaurant.kitchen.addFoodToKitchen(banana);
vyDyRestaurant.kitchen.addFoodToKitchen(coca);
vyDyRestaurant.kitchen.addFoodToKitchen(beefRice);
/**
 * Create Item of menu
 */
let bananaM = new MenuItem_1.MenuItem(MenuItem_1.ItemName.BANANA, 5000, Food_1.FoodCategory.DESSERT);
let duranM = new MenuItem_1.MenuItem(MenuItem_1.ItemName.DURAN, 10000, Food_1.FoodCategory.DESSERT);
let beefRiceM = new MenuItem_1.MenuItem(MenuItem_1.ItemName.BEEFRICE, 10000, Food_1.FoodCategory.MEAL);
let chickenRiceM = new MenuItem_1.MenuItem(MenuItem_1.ItemName.CHICKENRICE, 10000, Food_1.FoodCategory.MEAL);
let cocaM = new MenuItem_1.MenuItem(MenuItem_1.ItemName.COCA, 5000, Food_1.FoodCategory.DRINK);
let orangeM = new MenuItem_1.MenuItem(MenuItem_1.ItemName.ORANGE, 5000, Food_1.FoodCategory.DRINK);
/**
 * Add all Item to menu
 */
vyDyRestaurant.menu.addMenuItem(bananaM);
vyDyRestaurant.menu.addMenuItem(cocaM);
/**
 * Create customer order foods.
 */
let daryOrder1 = new Order_1.Order(orangeM, 3, dary, lara);
let daryOrder2 = new Order_1.Order(chickenRiceM, 1, dary, lara);
let daroOrder1 = new Order_1.Order(duranM, 1, daro, lary);
let daroOrder2 = new Order_1.Order(beefRiceM, 2, daro, lary);
/**
 * Customer order foods
 * Dary order orangeOrder, chickenRiceOrder
 * Daro order two beers, two beefRices and two bananas
 */
let billM = new BillManagement_1.BillManagement();
billM.addOrderOfCustomer(daryOrder1, daryOrder2, daroOrder1, daroOrder2);
let chef = new Chef_1.Chef(6, 'dy', Person_1.Gender.FEMALE, 9875678, 'pp');
console.log(vyDyRestaurant);
console.log(billM.allCustomerOrders);
console.log(vyDyRestaurant.kitchen.meal);
console.log(vyDyRestaurant.kitchen.drinks);
console.log(vyDyRestaurant.kitchen.desserts);
console.log(chef.cookFoodFrom(billM.allCustomerOrders, vyDyRestaurant.kitchen));
console.log(chef.cookFoodFrom(billM.allCustomerOrders, vyDyRestaurant.kitchen));
console.log(chef.cookFoodFrom(billM.allCustomerOrders, vyDyRestaurant.kitchen));
console.log(chef.cookFoodFrom(billM.allCustomerOrders, vyDyRestaurant.kitchen));
console.log(billM.getCustomerBill(daro));
console.log(billM.getCustomerBill(dary));
console.log(daro.pay(3000, billM.getPriceToPay(daro)));
console.log(chair1.removeCustomer(daro));
console.log(billM.getIncome());
