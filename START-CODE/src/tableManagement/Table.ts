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

    addChair(chair: Chair) {
        let maxChair = 4;
        if (this.chairs.length < maxChair) {
            this.chairs.push(chair);
        }else {
            return 'This table is full, cannot add more chair, Please add to anthor table';
        }
    }
}