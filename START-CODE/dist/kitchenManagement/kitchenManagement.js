"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KitchenManagement = void 0;
const Order_1 = require("../menuManagement/Order");
const Food_1 = require("./Food");
class KitchenManagement {
    constructor() {
        this.allMenuInKitchen = [];
        this.chefs = [];
        this.drinks = [];
        this.meal = [];
        this.desserts = [];
        this.foodOrdered = [];
        this.foodAlreadyCooked = [];
        this.foodCooked = [];
    }
    addOrderFood(orderFood) {
        this.foodOrdered = this.foodOrdered.concat(orderFood);
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
    addFoodAlreadyCooked(food) {
        this.foodAlreadyCooked.push(food);
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
    chefCook(chef) {
        let food = this.foodOrdered[0];
        if (food.food.category == Food_1.FoodCategory.DESSERT) {
            for (let i = 0; i < this.desserts.length; i++) {
                let dessert = this.desserts[i];
                if (dessert.name == food.food.name) {
                    if (dessert.quality >= food.quaility) {
                        this.foodCooked.push(chef.cook(food, Food_1.FoodCategory.DESSERT));
                        this.desserts[i].decreaseQuality(food.quaility);
                    }
                }
            }
        }
        else if (food.food.category == Food_1.FoodCategory.DRINK) {
            for (let i = 0; i < this.drinks.length; i++) {
                let drink = this.drinks[i];
                if (drink.name == food.food.name) {
                    if (drink.quality >= food.quaility) {
                        this.foodCooked.push(chef.cook(food, Food_1.FoodCategory.DRINK));
                        this.drinks[i].decreaseQuality(food.quaility);
                    }
                }
            }
        }
        else if (food.food.category == Food_1.FoodCategory.MEAL) {
            for (let i = 0; i < this.meal.length; i++) {
                let meal = this.meal[i];
                if (meal.name == food.food.name) {
                    if (meal.quality >= food.quaility) {
                        this.foodCooked.push(chef.cook(food, Food_1.FoodCategory.MEAL));
                        this.meal[i].decreaseQuality(food.quaility);
                    }
                }
            }
        }
        this.foodOrdered[0].addStatus(Order_1.OrderStatus.COMPLETED);
        this.addFoodAlreadyCooked(this.foodOrdered[0]);
        this.foodOrdered.splice(0, 1);
    }
}
exports.KitchenManagement = KitchenManagement;
