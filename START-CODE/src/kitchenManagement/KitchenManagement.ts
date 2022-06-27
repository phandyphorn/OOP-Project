import { Chef } from "../hrManagement/staff/Chef";
import { Menu } from "../menuManagement/Menu";
import { Dessert } from "./food/Dessert";
import { Drink } from "./food/Drink";
import { Meal } from "./food/Meal";


export class KitchenManagement{
    menu: Menu;
    chefs: Chef[] = [];
    drinks: Drink[] = [];
    meal: Meal[] = [];
    dessert: Dessert[] = [];

}