export enum Gender {
    FEMALE = "Female",
    MALE = "Male",
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
