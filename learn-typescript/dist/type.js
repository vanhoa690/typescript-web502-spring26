"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e1 = {
    name: "hoadv",
    age: 36,
};
// union | dung type of
function printValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
printValue("hello");
printValue(3.14159);
