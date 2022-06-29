import { Chef } from "../hrManagement/staff/Chef";
import { OrderStatus, Order } from "../menuManagement/Order";
import { Food, FoodCategory } from "./Food";
import { Dessert } from "./food/Dessert";
import { Drink } from "./food/Drink";
import { Meal } from "./food/Meal";

export class KitchenManagement{
    // allMenuInKitchen: Food[] = [];
    chefs: Chef[] = [];
    drinks: Drink[] = [];
    meal: Meal[] = [];
    desserts: Dessert[] = [];
    // foodOrdered: Order[] = [];
    // foodAlreadyCooked: Order[] = [];
    // foodCooked: Food[] = [];

    // addOrderFood(orderFood: Order[]) {
    //     this.foodOrdered = this.foodOrdered.concat(orderFood);
    // }

    getPrincipalOfDrink(): number{
        let totalD = 0
        let allDrinks = this.drinks
        allDrinks.forEach(drink => {
            totalD += drink.getPrice();
        })
        return totalD;
    }

    getPrincipalOfMeal(): number{
        let totalM = 0
        let allMeals = this.meal
        allMeals.forEach(meal => {
            totalM += meal.getPrice();
        })
        return totalM;
    }

    getPrincipalOfDessert(): number{
        let totalDe = 0
        let allDesserts = this.desserts
        allDesserts.forEach(dessert => {
            totalDe += dessert.getPrice();
        })
        return totalDe;
    }



    addFoodToKitchen(food: Food){
        let isHas = false;
        
        if (food.foodCategory == FoodCategory.DESSERT) {
            for (let i = 0; i < this.desserts.length; i++) {
                if (this.desserts[i].isEqual(food as Dessert)) {
                    isHas = true;
                    this.desserts[i].increaseQuality(food.quality)
                }
            }
            if (!isHas) {
                this.desserts.push(food as Dessert);
            }
        }else if (food.foodCategory == FoodCategory.DRINK) {
            for (let i = 0; i < this.drinks.length; i++) {
                if (this.drinks[i].isEqual(food as Drink)) {
                    isHas = true;
                    this.drinks[i].increaseQuality(food.quality)
                }
            }
            if (!isHas) {
                this.drinks.push(food as Drink);
            }
            
        }else if (food.foodCategory == FoodCategory.MEAL) {
            for (let i = 0; i < this.meal.length; i++) {
                if (this.meal[i].isEqual(food as Meal)) {
                    isHas = true;
                    this.meal[i].increaseQuality(food.quality)
                }
            }
            if (!isHas) {
                this.meal.push(food as Meal);
            }

        }

    }

    // chefCook(chef: Chef, allOrders: Order[]) {
    //     let food = this.foodOrdered[0];
    //     if (food.food.category == FoodCategory.DESSERT) {
    //         for (let i=0; i < this.desserts.length; i++) {
    //             let dessert = this.desserts[i];
    //             if (dessert.name == food.food.name) {
    //                 if (dessert.quality >= food.quaility) {
    //                     this.foodCooked.push(chef.cook(food, FoodCategory.DESSERT) as Food);
    //                     this.desserts[i].decreaseQuality(food.quaility);
    //                 }else {
    //                     this.foodOrdered[0].addStatus(OrderStatus.NOT_HAVE);
    //                     return "Don't have enough Dessert available in the kitchen";
    //                 }
    //             }
    //         }
    //     }else if (food.food.category == FoodCategory.DRINK) {
    //         for (let i=0; i < this.drinks.length; i++) {
    //             let drink = this.drinks[i];
    //             if (drink.name == food.food.name) {
    //                 if (drink.quality >= food.quaility) {
    //                     this.foodCooked.push(chef.cook(food, FoodCategory.DRINK) as Food);
    //                     this.drinks[i].decreaseQuality(food.quaility);
    //                 }else {
    //                     this.foodOrdered[0].addStatus(OrderStatus.NOT_HAVE);
    //                     return "Don't have enough Drink available in the kitchen";
    //                 }
    //             }

    //         }
    //     }else if (food.food.category == FoodCategory.MEAL) {
    //         for (let i=0; i < this.meal.length; i++) {
    //             let meal = this.meal[i];
    //             if (meal.name == food.food.name) {
    //                 if (meal.quality >= food.quaility) {
    //                     this.foodCooked.push(chef.cook(food, FoodCategory.MEAL) as Food);
    //                     this.meal[i].decreaseQuality(food.quaility);
    //                 }else {
    //                     this.foodOrdered[0].addStatus(OrderStatus.NOT_HAVE);
    //                     return "Don't have enough Meal available in the kitchen";
    //                 }
    //             }

    //         }
    //     }
    //     this.foodOrdered[0].addStatus(OrderStatus.COMPLETED);
    //     this.addFoodAlreadyCooked(this.foodOrdered[0])
    //     this.foodOrdered.splice(0,1);
    // }



}

