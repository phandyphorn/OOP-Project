export enum Gender {
    FEMALE,
    MALE,
}

export class Person {
    constructor(
    protected id: number,
    protected name: string,
    protected gender: Gender,
    protected phone: number,
    protected address: string,
    ){}

}
