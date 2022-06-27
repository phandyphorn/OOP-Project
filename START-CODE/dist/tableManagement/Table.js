"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
class Table {
    constructor(id) {
        this.id = id;
        this.chairs = [];
    }
    getNumberOfChair() {
        return this.chairs.length;
    }
    getChair() {
        return this.chairs;
    }
    addChair(...chair) {
        this.chairs = this.chairs.concat(...chair);
    }
}
exports.Table = Table;
