"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meal = void 0;
const Food_1 = require("../Food");
class Meal extends Food_1.Food {
    constructor(name, price, quality, foodCategory) {
        super(name, price, foodCategory, quality);
    }
}
exports.Meal = Meal;
