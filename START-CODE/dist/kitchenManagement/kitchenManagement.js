"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KitchenManagement = void 0;
class KitchenManagement {
    constructor() {
        this.allMenuInKitchen = [];
        this.chefs = [];
        this.drinks = [];
        this.meals = [];
        this.desserts = [];
        this.foodOrdered = [];
    }
    addOrderFood(orderFood) {
        this.foodOrdered = this.foodOrdered.concat(orderFood);
    }
    addMeal(...meal) {
        return this.meals = this.meals.concat(...meal);
    }
    addDrink(...drink) {
        return this.drinks = this.drinks.concat(...drink);
    }
    addDessert(...dessert) {
        return this.desserts = this.desserts.concat(dessert);
    }
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
        let allMeals = this.meals;
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
}
exports.KitchenManagement = KitchenManagement;
