import { Table } from "./Table";
export class TableManagement {
    tables : Table[] = [];

    getNumberOfTable(): number {
        return this.tables.length;
    }

    addTable(...table: Table[]) {
        this.tables = this.tables.concat(...table);
    }

    findFreeTable(): Table | undefined {
        return undefined;
    }

}