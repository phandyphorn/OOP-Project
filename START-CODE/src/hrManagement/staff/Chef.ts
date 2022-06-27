import { Person, Gender } from "../Person";

export class Chef extends Person{

    constructor(id: number, name: string, gender: Gender, phone:number, address:string, private salary:number)
    {
        super(id, name, phone, gender, address);
    }
}