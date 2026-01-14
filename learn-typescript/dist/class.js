"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. khoi class : Java / OOP / Angular
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo() {
        return `Name: ${this.name} - Age: ${this.age}`;
    }
}
// 2. khoi tao doi tuong
const p1 = new Person("hoadv", 36);
console.log(p1.showInfo());
const product1 = {
    name: "Iphone 14",
    price: 2000,
    isActive: true,
    //   hasDiscount: false, // error
};
const sum = (a, b) => {
    return a + b;
};
sum(1, 2);
const product2 = {
    name: "Samsung S23",
    price: 1800,
};
const status = "success";
const userResponse = {
    id: 1,
    name: "hoadv",
    email: "email@gmail.com",
    token: "token",
};
