import { Food, FoodCategory } from '../Food';

export class Dessert extends Food {
    constructor (
        name: string, 
        price: number, 
        quality: number,
        foodCategory: FoodCategory
    )
    {
        super(name, price,foodCategory, quality);
    }
}