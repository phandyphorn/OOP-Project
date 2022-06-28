import { ItemName } from '../../menuManagement/MenuItem';
import { Food, FoodCategory } from '../Food';

export class Dessert extends Food {
    constructor (
        name: ItemName, 
        price: number, 
        quality: number
    )
    {
        super(name, price, FoodCategory.DESSERT, quality);
    }

    isEqual(otherDessert: Dessert) {
        return this.name == otherDessert.name;
    }

    increaseQuality(moreQuality: number) {
        this.quality += moreQuality;
    }
    
    decreaseQuality(quality: number) {
        this.quality -= quality;
    }


}