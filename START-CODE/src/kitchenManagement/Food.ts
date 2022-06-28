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
        public foodCategory: FoodCategory,
        public quality: number
    )
    {}

    addStatus(status: FoodStatus) {
        this.status = status;
    }

    
}