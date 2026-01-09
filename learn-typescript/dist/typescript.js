"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("typescript");
// 1. Core Types: number, string, boolean
let myName = "hoadv"; // chuoi ky tu
const age = 36;
const isMarried = true;
let isActive = true;
let isLoading = false;
console.log(myName);
// 2. Type Inference suy dien ra kieu du lieu
let count = 10;
// count = "20"; // error
// 3. Core Types: object
let product = {
    id: 1,
    title: "Iphone 14",
    price: 2000,
    isActive: true,
};
// 4. Core Types: array number[] or Array<number>
let numbers = [1, 2, 3, 4, 5];
let names = ["Alice", "Bob", "Charlie"];
let scores = [90, 85, 88]; // number[]
// 6. Special Types: any
let randomValue = 10; // Gan any cho chay code
randomValue = "Hello";
// 7. Type: Union ( | )
let multiType;
multiType = 20;
multiType = "Twenty";
multiType = true;
// multiType = []; // error
// 8 Literal Type
let status;
// status = "success"; // error
status = "active";
// 8. Null và Undefined
const data = {
    id: 1,
    title: "Learn TypeScript",
    description: null,
    // timeLearn: undefined,
};
data.timeLearn; // undefined
data.description; // null
// 9. Unknown và Any
let input = "hello";
// input.toLowerCase(); // error
// hay gap try catch axios => catch (error: unknown) { as AxiosError} : message
// 10. Type Assertions
input.toLowerCase(); // casting
input.toLowerCase(); // casting
