import { BillManagement } from "./billManagement/BillManagement";
import { HRManagement } from "./hrManagement/HRManagement";
import { KitchenManagement } from "./kitchenManagement/kitchenManagement";
import { TableManagement } from "./tableManagement/TableManagement";
import { MenuManage } from "./menuManagement/MenuManagement";


export class Restaurant {
    public tables = new TableManagement();
    public humanResoure = new HRManagement();
    public bill = new BillManagement();
    public kitchen = new KitchenManagement();
    public menu = new MenuManage();
   
    constructor(
        private name: string,
        private address: string,
        private owner: string
    ){}
}