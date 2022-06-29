import { MenuItem} from "./MenuItem";

export class MenuManager {
    menuItem : MenuItem[] = [];  

    addMenuItem(item: MenuItem) {
        this.menuItem.push(item);
    }

    getMenuItem() {
        return this.menuItem;
    }


}