import { Chef } from "../hrManagement/staff/Chef";
import { Order } from "../menuManagement/Order";
import { Food } from "./Food";
import { Dessert } from "./food/Dessert";
import { Drink } from "./food/Drink";
import { Meal } from "./food/Meal";


export class KitchenManagement{
    allMenuInKitchen: Food[] = [];
    chefs: Chef[] = [];
    drinks: Drink[] = [];
    meals: Meal[] = [];
    desserts: Dessert[] = [];
    foodOrdered: Order[] = [];

    addOrderFood(orderFood: Order[]) {
        this.foodOrdered = this.foodOrdered.concat(orderFood);
    }

    addMeal(...meal: Meal[]){
        return this.meals = this.meals.concat(...meal);
    }

    addDrink(...drink: Drink[]){
        return this.drinks = this.drinks.concat(...drink);
    }

    addDessert(...dessert: Dessert[]){
        return this.desserts = this.desserts.concat(dessert);
    }

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
        let allMeals = this.meals
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
}