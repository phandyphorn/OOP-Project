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
    addChair(chair) {
        let maxChair = 4;
        if (this.chairs.length < maxChair) {
            this.chairs.push(chair);
        }
        else {
            return 'This table is full, cannot add more chair, Please add to anthor table';
        }
    }
}
exports.Table = Table;
