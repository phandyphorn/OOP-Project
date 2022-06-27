import { BillManagement } from "./billManagement/BillManagement";
import { HRManagement } from "./hrManagement/HRManagement";
import { KitchenManagement } from "./kitchenManagement/kitchenManagement";
import { Menu } from "./menuManagement/Menu";
import { Table } from "./tableManagement/Table";
import { TableManagement } from "./tableManagement/TableManagement";

export class Restaurant {
    public tables = new TableManagement();
    public humanResoure = new HRManagement();
    public bill = new BillManagement();
    public kitchen = new KitchenManagement();
    public menu = new Menu();
    constructor(
        private name: string,
        private address: string,
        private owner: string
    ){}

    


    
}