import { ItemName } from '../../menuManagement/MenuItem';
import { Food, FoodCategory } from '../Food';

export class Dessert extends Food {
    constructor (
        name: ItemName, 
        price: number, 
        quality: number,
        
    ){
        super(name, price, quality, FoodCategory.DESSERT);
    }

    isEqual(otherDessert: Dessert) {
        return this.name == otherDessert.name;
    }




}