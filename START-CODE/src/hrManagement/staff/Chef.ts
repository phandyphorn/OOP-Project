import { Person, Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Chef extends Staff{

    constructor(staffCategory: StaffCategory, id: number, name: string, gender: Gender, phone:number, address:string)
    {
        super(StaffCategory.CHEF, id, name, phone, gender, address);
    }
}