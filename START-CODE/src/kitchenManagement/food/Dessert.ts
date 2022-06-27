import { Food } from '../Food';

export class Dessert extends Food {
    constructor (
        name: string, 
        price: number, 
        private quality: number
    )
    {
        super(name, price );
    }
}