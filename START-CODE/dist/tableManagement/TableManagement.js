"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableManagement = void 0;
class TableManagement {
    constructor() {
        this.tables = [];
    }
    getNumberOfTable() {
        return this.tables.length;
    }
    addTable(...table) {
        this.tables = this.tables.concat(...table);
    }
    findFreeTable() {
        return undefined;
    }
}
exports.TableManagement = TableManagement;
