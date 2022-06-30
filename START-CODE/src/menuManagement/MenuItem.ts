import { FoodCategory,  } from "../kitchenManagement/Food";

export enum ItemName {
    BANANA = 'Banana',
    DURAN = 'Duran', 
    BEEFRICE = 'BeefRice',
    CHICKENRICE = 'ChickenRice',
    COCA = 'Coca',
    ORANGE = 'Orange'
}

export class MenuItem {
    constructor(
        private name: ItemName, 
        private price: number, 
        private category: FoodCategory
        ) {}

    isEqual(item: MenuItem) {
        return this.name == item.name && this.price == item.price && this.category == item.category;
    }

    getName() {
        return this.name;
    }
    
    getPrice() {
        return this.price;
    }

    getCategory() {
        return this.category;
    }


}