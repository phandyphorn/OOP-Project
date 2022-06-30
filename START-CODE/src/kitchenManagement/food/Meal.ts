import { ItemName } from '../../menuManagement/MenuItem';
import { Food, FoodCategory } from '../Food';

export class Meal extends Food {
    constructor (
        name: ItemName,
        price: number,
        quality: number,
    ){
        super(name, price, quality, FoodCategory.MEAL);
    }

    isEqual(otherMeal: Meal) {
        return this.name == otherMeal.name;
    }


}