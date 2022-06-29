import { ItemName } from "../menuManagement/MenuItem";

export enum FoodCategory {
    MEAL,
    DRINK,
    DESSERT
} 

export enum FoodStatus {
    HAVE,
    NOTHAVE
}

export abstract class Food {
    status?: FoodStatus;
    constructor(
        public name: ItemName, 
        public price: number, 
        public quality: number,
        public foodCategory: FoodCategory,
    )
    {}

    getPrice(): number{
        return this.price;
    }


    addStatus(status: FoodStatus) {
        this.status = status;
    }
}