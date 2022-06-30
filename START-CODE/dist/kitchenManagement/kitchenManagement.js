"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KitchenManagement = void 0;
const Food_1 = require("./Food");
class KitchenManagement {
    constructor() {
        this.drinks = [];
        this.meal = [];
        this.desserts = [];
    }
    addFoodToKitchen(food) {
        let isHas = false;
        if (food.getFoodCategory() == Food_1.FoodCategory.DESSERT) {
            for (let i = 0; i < this.desserts.length; i++) {
                if (this.desserts[i].isEqual(food)) {
                    isHas = true;
                    this.desserts[i].increaseQuality(food.getQuality());
                }
            }
            if (!isHas) {
                this.desserts.push(food);
            }
        }
        else if (food.getFoodCategory() == Food_1.FoodCategory.DRINK) {
            for (let i = 0; i < this.drinks.length; i++) {
                if (this.drinks[i].isEqual(food)) {
                    isHas = true;
                    this.drinks[i].increaseQuality(food.getQuality());
                }
            }
            if (!isHas) {
                this.drinks.push(food);
            }
        }
        else if (food.getFoodCategory() == Food_1.FoodCategory.MEAL) {
            for (let i = 0; i < this.meal.length; i++) {
                if (this.meal[i].isEqual(food)) {
                    isHas = true;
                    this.meal[i].increaseQuality(food.getQuality());
                }
            }
            if (!isHas) {
                this.meal.push(food);
            }
        }
    }
}
exports.KitchenManagement = KitchenManagement;
