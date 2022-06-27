"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Restaurant_1 = require("./Restaurant");
const Person_1 = require("./hrManagement/Person");
const Customer_1 = require("./hrManagement/customer/Customer");
const Chair_1 = require("./tableManagement/Chair");
const Table_1 = require("./tableManagement/Table");
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
