import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Waiter extends Staff {

    constructor(id: number, name: string, gender:Gender, phone:number, address:string)
    {
        super(StaffCategory.WAITER, id, name, gender, phone, address);
    }

}