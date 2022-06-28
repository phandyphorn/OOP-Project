"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = exports.FoodCategory = void 0;
var FoodCategory;
(function (FoodCategory) {
    FoodCategory["MEAL"] = "Meal";
    FoodCategory["DRINK"] = "Drink";
    FoodCategory["DESSERT"] = "Dessert";
})(FoodCategory = exports.FoodCategory || (exports.FoodCategory = {}));
class Food {
    constructor(name, price, foodCategory, quality) {
        this.name = name;
        this.price = price;
        this.foodCategory = foodCategory;
        this.quality = quality;
    }
    getPrice() {
        return this.price;
    }
    addStatus() {
    }
}
exports.Food = Food;
