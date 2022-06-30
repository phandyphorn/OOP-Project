import { Food, FoodCategory } from "./Food";
import { Dessert } from "./food/Dessert";
import { Drink } from "./food/Drink";
import { Meal } from "./food/Meal";

export class KitchenManagement{
    drinks: Drink[] = [];
    meal: Meal[] = [];
    desserts: Dessert[] = [];

    addFoodToKitchen(food: Food){
        let isHas = false;
        
        if (food.getFoodCategory() == FoodCategory.DESSERT) {
            for (let i = 0; i < this.desserts.length; i++) {
                if (this.desserts[i].isEqual(food as Dessert)) {
                    isHas = true;
                    this.desserts[i].increaseQuality(food.getQuality())
                }
            }
            if (!isHas) {
                this.desserts.push(food as Dessert);
            }
        }else if (food.getFoodCategory() == FoodCategory.DRINK) {
            for (let i = 0; i < this.drinks.length; i++) {
                if (this.drinks[i].isEqual(food as Drink)) {
                    isHas = true;
                    this.drinks[i].increaseQuality(food.getQuality())
                }
            }
            if (!isHas) {
                this.drinks.push(food as Drink);
            }
            
        }else if (food.getFoodCategory() == FoodCategory.MEAL) {
            for (let i = 0; i < this.meal.length; i++) {
                if (this.meal[i].isEqual(food as Meal)) {
                    isHas = true;
                    this.meal[i].increaseQuality(food.getQuality())
                }
            }
            if (!isHas) {
                this.meal.push(food as Meal);
            }

        }

    }





}

