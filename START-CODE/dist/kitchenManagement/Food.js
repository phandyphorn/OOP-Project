"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = exports.FoodStatus = exports.FoodCategory = void 0;
var FoodCategory;
(function (FoodCategory) {
    FoodCategory[FoodCategory["MEAL"] = 0] = "MEAL";
    FoodCategory[FoodCategory["DRINK"] = 1] = "DRINK";
    FoodCategory[FoodCategory["DESSERT"] = 2] = "DESSERT";
})(FoodCategory = exports.FoodCategory || (exports.FoodCategory = {}));
var FoodStatus;
(function (FoodStatus) {
    FoodStatus[FoodStatus["HAVE"] = 0] = "HAVE";
    FoodStatus[FoodStatus["NOTHAVE"] = 1] = "NOTHAVE";
})(FoodStatus = exports.FoodStatus || (exports.FoodStatus = {}));
class Food {
    constructor(name, price, quality, foodCategory) {
        this.name = name;
        this.price = price;
        this.quality = quality;
        this.foodCategory = foodCategory;
    }
    getPrice() {
        return this.price;
    }
    addStatus(status) {
        this.status = status;
    }
    getCategory() {
        return this.foodCategory;
    }
}
exports.Food = Food;
