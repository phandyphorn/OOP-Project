"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
const BillManagement_1 = require("./billManagement/BillManagement");
const HRManagement_1 = require("./hrManagement/HRManagement");
const kitchenManagement_1 = require("./kitchenManagement/kitchenManagement");
const TableManagement_1 = require("./tableManagement/TableManagement");
const MenuManagement_1 = require("./menuManagement/MenuManagement");
class Restaurant {
    constructor(name, address, owner) {
        this.name = name;
        this.address = address;
        this.owner = owner;
        this.tables = new TableManagement_1.TableManagement();
        this.humanResoure = new HRManagement_1.HRManagement();
        this.bill = new BillManagement_1.BillManagement();
        this.kitchen = new kitchenManagement_1.KitchenManagement();
        this.menu = new MenuManagement_1.MenuManage();
    }
}
exports.Restaurant = Restaurant;
