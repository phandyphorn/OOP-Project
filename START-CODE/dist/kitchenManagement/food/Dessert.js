"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dessert = void 0;
const Food_1 = require("../Food");
class Dessert extends Food_1.Food {
    constructor(name, price, quality) {
        super(name, price);
        this.quality = quality;
    }
}
exports.Dessert = Dessert;
