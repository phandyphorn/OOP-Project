"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = exports.FoodCategory = void 0;
var FoodCategory;
(function (FoodCategory) {
    FoodCategory[FoodCategory["MEAL"] = 0] = "MEAL";
    FoodCategory[FoodCategory["DRINK"] = 1] = "DRINK";
    FoodCategory[FoodCategory["DESSERT"] = 2] = "DESSERT";
})(FoodCategory = exports.FoodCategory || (exports.FoodCategory = {}));
/**
 * Any food in the kitchen - common attributes
 */
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
    getName() {
        return this.name;
    }
    getQuality() {
        return this.quality;
    }
    getFoodCategory() {
        return this.foodCategory;
    }
    increaseQuality(moreQuality) {
        this.quality += moreQuality;
    }
    decreaseQuality(quality) {
        this.quality -= quality;
    }
}
exports.Food = Food;
