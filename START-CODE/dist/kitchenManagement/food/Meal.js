"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meal = void 0;
const Food_1 = require("../Food");
class Meal extends Food_1.Food {
    constructor(name, price, quality) {
        super(name, price, Food_1.FoodCategory.MEAL, quality);
    }
    isEqual(otherMeal) {
        return this.name == otherMeal.name;
    }
    increaseQuality(moreQuality) {
        this.quality += moreQuality;
    }
    decreaseQuality(quality) {
        this.quality -= quality;
    }
    hasThisMeal(meal) {
        return this.name == meal.name;
    }
}
exports.Meal = Meal;
