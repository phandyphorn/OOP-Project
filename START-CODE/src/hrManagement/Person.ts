export enum Gender {
    FEMALE,
    MALE,
}

export abstract class Person {
    constructor(
    protected id: number,
    protected name: string,
    protected gender: Gender,
    protected phone: number,
    protected address: string,
    ){}

}
