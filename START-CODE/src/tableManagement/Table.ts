import { Chair } from "./Chair";
export class Table {
    chairs: Chair[] = []
    constructor(protected id: number){}

    getNumberOfChair(): number {
        return this.chairs.length;
    }

    getChair(): Chair[] {
        return this.chairs;
    }

    addChair(...chair: Chair[]) {
        this.chairs = this.chairs.concat(...chair);
    }
}