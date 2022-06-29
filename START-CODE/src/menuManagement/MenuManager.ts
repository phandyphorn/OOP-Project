import { MenuItem} from "./MenuItem";

export class MenuManager {
    menuItem : MenuItem[] = [];  

    addMenuItem(item: MenuItem) {
        let isHasInMenu = false;
        for (let item of this.menuItem) {
            if (item.isEqual(item)) {
                isHasInMenu = true;
            }
        }
        if (!isHasInMenu) {
            this.menuItem.push(item);
        }else {
            return "This item is already has in the menu";
        }
    }

    getMenuItem() {
        return this.menuItem;
    }


}