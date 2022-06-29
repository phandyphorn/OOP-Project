"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuManager = void 0;
class MenuManager {
    constructor() {
        this.menuItem = [];
    }
    addMenuItem(item) {
        this.menuItem.push(item);
    }
    getMenuItem() {
        return this.menuItem;
    }
}
exports.MenuManager = MenuManager;
