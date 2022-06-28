"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dessert = void 0;
const Food_1 = require("../Food");
class Dessert extends Food_1.Food {
    constructor(name, price, quality, foodCategory) {
        super(name, price, foodCategory, quality);
    }
}
exports.Dessert = Dessert;
