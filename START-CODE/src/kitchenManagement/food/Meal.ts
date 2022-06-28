import { ItemName } from '../../menuManagement/MenuItem';
import { Food, FoodCategory } from '../Food';

export class Meal extends Food {
    constructor (
        name: ItemName,
        price: number,
        quality: number
    )
    {
        super(name, price, FoodCategory.MEAL, quality);
    }

    isEqual(otherMeal: Meal) {
        return this.name == otherMeal.name;
    }

    increaseQuality(moreQuality: number) {
        this.quality += moreQuality;
    }

    decreaseQuality(quality: number) {
        this.quality -= quality;
    }

    hasThisMeal(meal: Food) {
        return this.name == meal.name;
    }
}