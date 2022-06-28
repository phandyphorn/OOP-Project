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
/**
 * Create restaurant object using Restaurant class
 */
let vyDyRestaurant = new Restaurant_1.Restaurant('VyDyRestaurant', '1 street 473', 'VyDy');
/**
 * Create Customer using Person Class
 * Daro and Dary are customers.
 */
let daro = new Customer_1.Customer(1, 'Daro', Person_1.Gender.MALE, 962517455, 'Phnom Penh');
let dary = new Customer_1.Customer(1, 'Dary', Person_1.Gender.FEMALE, 962517455, 'Phnom Penh');
/**
 * Create chairs using Chair Class
 */
let chair1 = new Chair_1.Chair(1);
let chair2 = new Chair_1.Chair(2);
let chair3 = new Chair_1.Chair(3);
let chair4 = new Chair_1.Chair(4);
/**
 * Create table usiing Table Class
 */
let table1 = new Table_1.Table(1);
let table2 = new Table_1.Table(2);
/**
 * Add Customers To Chair;
 */
chair1.setCustomer(daro);
chair2.setCustomer(dary);
/**
 * Add Chairs to Table
 */
table1.addChair(chair1, chair2);
table2.addChair(chair3, chair4);
/**
 * Add table to table management
 */
vyDyRestaurant.tables.addTable(table1, table2);
console.log(vyDyRestaurant);
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
let banana = new Dessert_1.Dessert('Banana', 1000, 10, Food_1.FoodCategory.DESSERT);
let duran = new Dessert_1.Dessert('Duran', 8000, 3, Food_1.FoodCategory.DESSERT);
let beefRice = new Meal_1.Meal('Beef and Rice', 7000, 5, Food_1.FoodCategory.MEAL);
let chickenRice = new Meal_1.Meal('Chicken and Rice', 6000, 2, Food_1.FoodCategory.MEAL);
let coca = new Drink_1.Drink('Coca', 2000, 20, Food_1.FoodCategory.DRINK);
let orange = new Drink_1.Drink('Orange', 4000, 5, Food_1.FoodCategory.DRINK);
/**
 * Add Meals, Drinks, and Desserts into Kitchen
 */
vyDyRestaurant.kitchen.addMeal(beefRice, chickenRice);
vyDyRestaurant.kitchen.addDessert(banana, duran);
vyDyRestaurant.kitchen.addDrink(coca, orange);
/**
 * Create Item of menu
 */
let bananaM = new MenuItem_1.MenuItem(MenuItem_1.ItemName.BANANA, 1000, Food_1.FoodCategory.DESSERT);
let duranM = new MenuItem_1.MenuItem(MenuItem_1.ItemName.DURAN, 8000, Food_1.FoodCategory.DESSERT);
let beefRiceM = new MenuItem_1.MenuItem(MenuItem_1.ItemName.BEEFRICE, 7000, Food_1.FoodCategory.MEAL);
let chickenRiceM = new MenuItem_1.MenuItem(MenuItem_1.ItemName.CHICKENRICE, 6000, Food_1.FoodCategory.MEAL);
let cocaM = new MenuItem_1.MenuItem(MenuItem_1.ItemName.COCA, 2000, Food_1.FoodCategory.DRINK);
let orangeM = new MenuItem_1.MenuItem(MenuItem_1.ItemName.ORANGE, 4000, Food_1.FoodCategory.DRINK);
/**
 * Add all Item to menu
 */
vyDyRestaurant.menu.addMenuItem(bananaM, duranM, beefRiceM, chickenRiceM, cocaM, orangeM);
/**
 * Create Orders for customer
 */
let orangeOrder = new Order_1.Order(orangeM, 1);
let chickenRiceOrder = new Order_1.Order(chickenRiceM, 1);
let duranOrder = new Order_1.Order(duranM, 1);
let beefRiceOrder = new Order_1.Order(beefRiceM, 2);
/**
 * Customer order foods
 * Dary order orangeOrder, chickenRiceOrder
 * Daro order two beers, two beefRices and two bananas
 */
dary.orderFood(orangeOrder, chickenRiceOrder);
daro.orderFood(duranOrder, beefRiceOrder);
console.log(dary.getOrdered());
console.log(vyDyRestaurant.kitchen.getPrincipalOfMeal());
console.log(vyDyRestaurant.kitchen.getPrincipalOfDessert());
console.log(vyDyRestaurant.kitchen.getPrincipalOfDrink());
