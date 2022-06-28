import { Food } from "../kitchenManagement/Food";
import { MenuItem } from "./MenuItem";
import { MenuManage } from "./MenuManagement";

export class Order {
    constructor(public foods: MenuItem, public quaility: number){}

    
}
  