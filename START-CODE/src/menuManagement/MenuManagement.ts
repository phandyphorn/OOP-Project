
import { MenuItem} from "./MenuItem";

export class MenuManage {
    [x: string]: any;
    menuItem : MenuItem[] = [];  

    addMenuItem(...item: MenuItem[]) {
        this.menuItem = this.menuItem.concat(item);
    }

    getMenuItem() {
        return this.menuItem;
    }


}

