"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuManager = void 0;
class MenuManager {
    constructor() {
        this.menuItem = [];
    }
    addMenuItem(item) {
        let isHasInMenu = false;
        for (let item of this.menuItem) {
            if (item.isEqual(item)) {
                isHasInMenu = true;
            }
        }
        if (!isHasInMenu) {
            this.menuItem.push(item);
        }
        else {
            return "This item is already has in the menu";
        }
    }
    getMenuItem() {
        return this.menuItem;
    }
}
exports.MenuManager = MenuManager;
