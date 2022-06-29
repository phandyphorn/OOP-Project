import { ItemName } from '../../menuManagement/MenuItem';
import { Food, FoodCategory } from '../Food';

export class Drink extends Food {
    constructor (
        name: ItemName, 
        price: number,
        quality: number,
    )
    {
        super(name, price, quality, FoodCategory.DRINK);
    }

    isEqual(otherDrink: Drink) {
        return this.name == otherDrink.name;
    }

    increaseQuality(moreQuality: number) {
        this.quality += moreQuality;
    }
  
    decreaseQuality(quality: number) {
        this.quality -= quality;
    }

}