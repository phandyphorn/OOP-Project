"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuManage = void 0;
class MenuManage {
    constructor() {
        this.menuItem = [];
    }
    addMenuItem(...item) {
        this.menuItem = this.menuItem.concat(item);
    }
    getMenuItem() {
        return this.menuItem;
    }
}
exports.MenuManage = MenuManage;
