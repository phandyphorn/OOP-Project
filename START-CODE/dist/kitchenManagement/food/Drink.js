"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drink = void 0;
const Food_1 = require("../Food");
class Drink extends Food_1.Food {
    constructor(name, price, quality) {
        super(name, price, quality, Food_1.FoodCategory.DRINK);
    }
    isEqual(otherDrink) {
        return this.name == otherDrink.name;
    }
    increaseQuality(moreQuality) {
        this.quality += moreQuality;
    }
    decreaseQuality(quality) {
        this.quality -= quality;
    }
}
exports.Drink = Drink;
