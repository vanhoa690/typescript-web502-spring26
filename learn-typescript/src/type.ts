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

// union | dung type of
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

printValue("hello");
printValue(3.14159);
