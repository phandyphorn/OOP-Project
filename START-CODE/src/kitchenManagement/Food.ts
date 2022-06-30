import { ItemName } from "../menuManagement/MenuItem";

export enum FoodCategory {
    MEAL,
    DRINK,
    DESSERT
} 

/**
 * Any food in the kitchen - common attributes
 */
export abstract class Food {
    constructor(
        protected name: ItemName, 
        protected price: number, 
        protected quality: number,
        protected foodCategory: FoodCategory
    ){}

    getPrice() {
        return this.price;
    }

    getName() {
        return this.name;
    }

    getQuality() {
        return this.quality;
    }
    
    getFoodCategory() {
        return this.foodCategory;
    }

    increaseQuality(moreQuality: number) {
        this.quality += moreQuality;
    }
    
    decreaseQuality(quality: number) {
        this.quality -= quality;
    }
}