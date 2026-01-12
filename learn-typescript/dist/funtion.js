"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Funtion co Return, params
function add(a, b) {
    return a + b;
}
const addResult = (a, b) => a + b;
add(2, 3); //5
addResult(4, 5); // 9
// add(undefined, null); // error
// Funtion khong co Return: kieu void
function logMessage(message) {
    console.log("Message:", message);
}
// props trong react sang  component : onClick: () => void
// props trong react sang  component : onSearch: (keyword: string) => string
// 3. Tham số mặc định (Default Parameter)
function greetUser(name, greeting = "hello") {
    return `${greeting}, ${name}!`;
}
greetUser("Alice"); // "hello, Alice!"
greetUser("Alice", "Xin Chao"); // "Xin Chao, Alice!"
// 4. Tham số tùy chọn (Optional Parameter)
function describePerson(name, age) {
    if (age) {
        return `${name} is ${age} years old.`;
    }
    return `${name} has no age specified.`;
}
// 5. Toán tử rest (rest parameter)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
sum(1, 2);
sum(1, 2, 3, 4, 5);
// 6. Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);
const arr3 = ["a", "b", "c"];
const arr4 = [1, 2, 3];
const result = [...arr3, ...arr4];
console.log(result);
