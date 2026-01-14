type Person = {
  name: string;
};

type Student = {
  age: number;
};

// | Union: 1 trong 2 la ok
// ket hop & bao gom ca 2

// 1. Intersection Types
type Employee = Person & Student;

const e1: Employee = {
  name: "hoadv",
  age: 36,
};

// 2. union | dung typeof de kiem tra kieu du lieu
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

printValue("hello");
printValue(3.14159);

// 3 Type Casting  (as)
const value: unknown = "hello world";
(value as string).toUpperCase(); // error

// 4 Enum

enum Status {
  Pending = "PENDING",
  Success = "SUCCESS",
  Error = "ERROR",
}

enum Status2 {
  Pending, // 0
  Success, // 1
  Error, // 2
}

console.log(Status.Pending); //  "PENDING
console.log(Status2.Pending); //  0

// 5 Literal Types
type Direction = "up" | "down" | "left" | "right";
