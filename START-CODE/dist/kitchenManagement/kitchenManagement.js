"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KitchenManagement = void 0;
const Food_1 = require("./Food");
class KitchenManagement {
    constructor() {
        // allMenuInKitchen: Food[] = [];
        this.chefs = [];
        this.drinks = [];
        this.meal = [];
        this.desserts = [];
    }
    // foodOrdered: Order[] = [];
    // foodAlreadyCooked: Order[] = [];
    // foodCooked: Food[] = [];
    // addOrderFood(orderFood: Order[]) {
    //     this.foodOrdered = this.foodOrdered.concat(orderFood);
    // }
    getPrincipalOfDrink() {
        let totalD = 0;
        let allDrinks = this.drinks;
        allDrinks.forEach(drink => {
            totalD += drink.getPrice();
        });
        return totalD;
    }
    getPrincipalOfMeal() {
        let totalM = 0;
        let allMeals = this.meal;
        allMeals.forEach(meal => {
            totalM += meal.getPrice();
        });
        return totalM;
    }
    getPrincipalOfDessert() {
        let totalDe = 0;
        let allDesserts = this.desserts;
        allDesserts.forEach(dessert => {
            totalDe += dessert.getPrice();
        });
        return totalDe;
    }
    addFoodToKitchen(food) {
        let isHas = false;
        if (food.foodCategory == Food_1.FoodCategory.DESSERT) {
            for (let i = 0; i < this.desserts.length; i++) {
                if (this.desserts[i].isEqual(food)) {
                    isHas = true;
                    this.desserts[i].increaseQuality(food.quality);
                }
            }
            if (!isHas) {
                this.desserts.push(food);
            }
        }
        else if (food.foodCategory == Food_1.FoodCategory.DRINK) {
            for (let i = 0; i < this.drinks.length; i++) {
                if (this.drinks[i].isEqual(food)) {
                    isHas = true;
                    this.drinks[i].increaseQuality(food.quality);
                }
            }
            if (!isHas) {
                this.drinks.push(food);
            }
        }
        else if (food.foodCategory == Food_1.FoodCategory.MEAL) {
            for (let i = 0; i < this.meal.length; i++) {
                if (this.meal[i].isEqual(food)) {
                    isHas = true;
                    this.meal[i].increaseQuality(food.quality);
                }
            }
            if (!isHas) {
                this.meal.push(food);
            }
        }
    }
}
exports.KitchenManagement = KitchenManagement;
