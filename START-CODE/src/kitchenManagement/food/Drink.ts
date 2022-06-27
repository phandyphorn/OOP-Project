import { Food } from '../Food';

export class Drink extends Food {
    constructor (
        name: string, 
        price: number,
        private quality: number
    )
    {
        super(name, price,);
    }
}