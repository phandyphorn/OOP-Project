"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["FEMALE"] = 0] = "FEMALE";
    Gender[Gender["MALE"] = 1] = "MALE";
})(Gender = exports.Gender || (exports.Gender = {}));
class Person {
    constructor(id, name, gender, phone, address) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.phone = phone;
        this.address = address;
    }
}
exports.Person = Person;
