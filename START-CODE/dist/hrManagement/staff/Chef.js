"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chef = void 0;
const Food_1 = require("../../kitchenManagement/Food");
const Dessert_1 = require("../../kitchenManagement/food/Dessert");
const Drink_1 = require("../../kitchenManagement/food/Drink");
const Meal_1 = require("../../kitchenManagement/food/Meal");
const Order_1 = require("../../menuManagement/Order");
const Staff_1 = require("./Staff");
class Chef extends Staff_1.Staff {
    constructor(id, name, gender, phone, address) {
        super(Staff_1.StaffCategory.CHEF, id, name, gender, phone, address);
    }
    cookFoodFrom(allOrders, kitchenManagement) {
        for (let i = 0; i < allOrders.length; i++) {
            if (allOrders[i].status == Order_1.OrderStatus.NOT_COMPLETED) {
                if (allOrders[i].food.category == Food_1.FoodCategory.DESSERT) {
                    for (let j = 0; j < kitchenManagement.desserts.length; j++) {
                        if (kitchenManagement.desserts[j].name == allOrders[i].food.name) {
                            if (kitchenManagement.desserts[j].quality >= allOrders[i].quaility) {
                                allOrders[i].addStatus(Order_1.OrderStatus.COMPLETED);
                                kitchenManagement.desserts[j].decreaseQuality(allOrders[i].quaility);
                                return new Dessert_1.Dessert(allOrders[i].food.name, allOrders[i].food.price, allOrders[i].quaility);
                            }
                            else {
                                allOrders[i].addStatus(Order_1.OrderStatus.NOT_HAVE);
                                return "Don't have enough Dessert available in the kitchen";
                            }
                        }
                    }
                }
                else if (allOrders[i].food.category == Food_1.FoodCategory.DRINK) {
                    for (let j = 0; j < kitchenManagement.drinks.length; j++) {
                        if (kitchenManagement.drinks[j].name == allOrders[i].food.name) {
                            if (kitchenManagement.drinks[j].quality >= allOrders[i].quaility) {
                                allOrders[i].addStatus(Order_1.OrderStatus.COMPLETED);
                                kitchenManagement.drinks[j].decreaseQuality(allOrders[i].quaility);
                                return new Drink_1.Drink(allOrders[i].food.name, allOrders[i].food.price, allOrders[i].quaility);
                            }
                            else {
                                allOrders[i].addStatus(Order_1.OrderStatus.NOT_HAVE);
                                return "Don't have enough Drink available in the kitchen";
                            }
                        }
                    }
                }
                else if (allOrders[i].food.category == Food_1.FoodCategory.MEAL) {
                    for (let j = 0; j < kitchenManagement.meal.length; j++) {
                        if (kitchenManagement.meal[j].name == allOrders[i].food.name) {
                            if (kitchenManagement.meal[j].quality >= allOrders[i].quaility) {
                                allOrders[i].addStatus(Order_1.OrderStatus.COMPLETED);
                                kitchenManagement.meal[j].decreaseQuality(allOrders[i].quaility);
                                return new Meal_1.Meal(allOrders[i].food.name, allOrders[i].food.price, allOrders[i].quaility);
                            }
                            else {
                                allOrders[i].addStatus(Order_1.OrderStatus.NOT_HAVE);
                                return "Don't have enough Meal available in the kitchen";
                            }
                        }
                    }
                }
            }
        }
    }
}
exports.Chef = Chef;
