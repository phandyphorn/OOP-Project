"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = exports.ItemName = void 0;
var ItemName;
(function (ItemName) {
    ItemName["BANANA"] = "Banana";
    ItemName["DURAN"] = "Duran";
    ItemName["BEEFRICE"] = "BeefRice";
    ItemName["CHICKENRICE"] = "ChickenRice";
    ItemName["COCA"] = "Coca";
    ItemName["ORANGE"] = "Orange";
})(ItemName = exports.ItemName || (exports.ItemName = {}));
class MenuItem {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    isEqual(item) {
        return this.name == item.name && this.price == item.price && this.category == item.category;
    }
}
exports.MenuItem = MenuItem;
