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
    constructor(public name: ItemName, public price: number, public category: FoodCategory) {}

    isEqual(item: MenuItem) {
        return this.name == item.name && this.price == item.price && this.category == item.category;
    }


}