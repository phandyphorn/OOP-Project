import { BillManagement } from "../../billManagement/BillManagement";
import { Food, FoodCategory } from "../../kitchenManagement/Food";
import { Dessert } from "../../kitchenManagement/food/Dessert";
import { Drink } from "../../kitchenManagement/food/Drink";
import { Meal } from "../../kitchenManagement/food/Meal";
import { KitchenManagement } from "../../kitchenManagement/kitchenManagement";
import { Order, OrderStatus } from "../../menuManagement/Order";
import { Person, Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Chef extends Staff{

    constructor(id: number, name: string, gender: Gender, phone:number, address:string)
    {
        super(StaffCategory.CHEF, id, name, gender, phone, address);
    }

    cookFoodFrom (allOrders: Order[], kitchenManagement: KitchenManagement) {
        for (let i = 0; i < allOrders.length; i++) {
            if (allOrders[i].status == OrderStatus.NOT_COMPLETED) {
                if (allOrders[i].food.category == FoodCategory.DESSERT) {
                    for (let j=0; j < kitchenManagement.desserts.length; j++) {
                        if (kitchenManagement.desserts[j].name == allOrders[i].food.name) {
                            if (kitchenManagement.desserts[j].quality >= allOrders[i].quaility) {
                                allOrders[i].addStatus(OrderStatus.COMPLETED);
                                kitchenManagement.desserts[j].decreaseQuality(allOrders[i].quaility);
                                return new Dessert(allOrders[i].food.name, allOrders[i].food.price, allOrders[i].quaility); 
                            }else {
                                allOrders[i].addStatus(OrderStatus.NOT_HAVE);
                                return "Don't have enough Dessert available in the kitchen";
                            }
                        }
                    }
                }else if (allOrders[i].food.category == FoodCategory.DRINK) {
                    for (let j=0; j < kitchenManagement.drinks.length; j++) {
                        if (kitchenManagement.drinks[j].name == allOrders[i].food.name) {
                            if (kitchenManagement.drinks[j].quality >= allOrders[i].quaility) {
                                allOrders[i].addStatus(OrderStatus.COMPLETED);
                                kitchenManagement.drinks[j].decreaseQuality(allOrders[i].quaility);
                                return new Drink(allOrders[i].food.name, allOrders[i].food.price, allOrders[i].quaility); 
                            }else {
                                allOrders[i].addStatus(OrderStatus.NOT_HAVE);
                                return "Don't have enough Drink available in the kitchen";
                            }
                        }
                    }

                }else if (allOrders[i].food.category == FoodCategory.MEAL) {
                    for (let j=0; j < kitchenManagement.meal.length; j++) {
                        if (kitchenManagement.meal[j].name == allOrders[i].food.name) {
                            if (kitchenManagement.meal[j].quality >= allOrders[i].quaility) {
                                allOrders[i].addStatus(OrderStatus.COMPLETED);
                                kitchenManagement.meal[j].decreaseQuality(allOrders[i].quaility);
                                return new Meal(allOrders[i].food.name, allOrders[i].food.price, allOrders[i].quaility); 
                            }else {
                                allOrders[i].addStatus(OrderStatus.NOT_HAVE);
                                return "Don't have enough Meal available in the kitchen";
                            }
                        }
                    }

                }
                
            }
        }

    } 

}