"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chef = void 0;
const Food_1 = require("../../kitchenManagement/Food");
const Dessert_1 = require("../../kitchenManagement/food/Dessert");
const Drink_1 = require("../../kitchenManagement/food/Drink");
const Meal_1 = require("../../kitchenManagement/food/Meal");
const Staff_1 = require("./Staff");
class Chef extends Staff_1.Staff {
    constructor(id, name, gender, phone, address) {
        super(Staff_1.StaffCategory.CHEF, id, name, gender, phone, address);
    }
    cook(food, foodCategory) {
        if (foodCategory == Food_1.FoodCategory.DESSERT) {
            return new Dessert_1.Dessert(food.food.name, food.food.price, food.quaility);
        }
        else if (foodCategory == Food_1.FoodCategory.DRINK) {
            return new Drink_1.Drink(food.food.name, food.food.price, food.quaility);
        }
        else if (foodCategory == Food_1.FoodCategory.MEAL) {
            return new Meal_1.Meal(food.food.name, food.food.price, food.quaility);
        }
    }
}
exports.Chef = Chef;
