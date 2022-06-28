
export enum FoodCategory {
    MEAL = 'Meal',
    DRINK = 'Drink',
    DESSERT = "Dessert"
}
export class Food {
    status?: string;
    constructor(
        public name: string, 
        public price: number, 
        public foodCategory: FoodCategory,
        public quality: number
    )
    {}

    getPrice(): number{
        return this.price;
    }

    addStatus() {

    }
}