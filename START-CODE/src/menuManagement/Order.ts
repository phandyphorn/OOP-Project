import { Food } from "../kitchenManagement/Food";


export class Order {
    constructor(public foods: Food, public quaility: number){}
}