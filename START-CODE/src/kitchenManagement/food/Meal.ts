import { Food } from '../Food';

export class Meal extends Food {
    constructor (
        name: string,
        price: number,
        private quality: number
    )
    {
        super(name, price);
    }
}