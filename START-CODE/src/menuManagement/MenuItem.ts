import { FoodCategory } from "../kitchenManagement/Food";

export enum ItemName {
    COCA_COLA,
    RICE,
    SOUP
}
export class MenuItem {
    constructor(public name: ItemName, public price: number, public category: FoodCategory) {}

    isEqual(item: MenuItem) {
        return this.name == item.name && this.price == item.price && this.category == item.category;
    }
    
}