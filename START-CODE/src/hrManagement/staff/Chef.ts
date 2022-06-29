import { Food, FoodCategory } from "../../kitchenManagement/Food";
import { Dessert } from "../../kitchenManagement/food/Dessert";
import { Drink } from "../../kitchenManagement/food/Drink";
import { Meal } from "../../kitchenManagement/food/Meal";
import { Order } from "../../menuManagement/Order";
import { Person, Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Chef extends Staff{

    constructor(id: number, name: string, gender: Gender, phone:number, address:string)
    {
        super(StaffCategory.CHEF, id, name, gender, phone, address);
    }

    cook(food: Order, foodCategory: FoodCategory) {
        if (foodCategory == FoodCategory.DESSERT) {
            return new Dessert(food.food.name, food.food.price, food.quaility); 
        }else if (foodCategory == FoodCategory.DRINK) {
            return new Drink(food.food.name, food.food.price, food.quaility);
        }else if (foodCategory == FoodCategory.MEAL) {
            return new Meal(food.food.name, food.food.price, food.quaility);
        }
    }
}