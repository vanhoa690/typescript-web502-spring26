# Hướng dẫn về Class và Interface trong TypeScript

## 1. Classes

### 1.1 Classes

Trong TypeScript, class là một cách để định nghĩa các đối tượng có thuộc tính và phương thức. Class trong TypeScript hỗ trợ các tính năng của lập trình hướng đối tượng như kế thừa, đóng gói và đa hình.

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person("Alice", 30);
person.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

### 1.2 Công cụ sửa đổi truy cập (Access Modifiers)

TypeScript hỗ trợ ba loại công cụ sửa đổi truy cập: `public`, `private`, và `protected`. Ngoài ra, thuộc tính `readonly` cũng được sử dụng để giới hạn việc thay đổi giá trị.

- **Public**: Thuộc tính hoặc phương thức được khai báo `public` có thể được truy cập từ bất kỳ đâu. Đây là giá trị mặc định nếu không khai báo access modifier.

```typescript
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("Alice");
console.log(person.name); // Output: Alice
```

- **Private**: Thuộc tính hoặc phương thức được khai báo `private` chỉ có thể được truy cập bên trong class chứa nó.

```typescript
class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Alice");
console.log(person.getName()); // Output: Alice
// console.log(person.name); // Lỗi: Property 'name' is private
```

### 1.3 Kế thừa (Inheritance)

TypeScript hỗ trợ kế thừa thông qua từ khóa `extends`. Một class con có thể kế thừa các thuộc tính và phương thức từ class cha.

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(): void {
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Buddy");
dog.move(); // Output: Buddy is moving
dog.bark(); // Output: Woof! Woof!
```

## 2. Interfaces

### 2.1 Interfaces

Interface trong TypeScript được sử dụng để định nghĩa cấu trúc (shape) của một đối tượng, đảm bảo rằng các đối tượng tuân thủ một hợp đồng (contract) nhất định.

```typescript
interface Person {
  name: string;
  age: number;
  greet(): void;
}

const person: Person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is Alice
```

### 2.2 Interfaces như là Function Types

Interface có thể được sử dụng để định nghĩa kiểu của một hàm.

```typescript
interface AddFunction {
  (a: number, b: number): number;
}

const add: AddFunction = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
```

### 2.3 Sử dụng Interfaces với Classes

Một class có thể triển khai (implement) một interface để đảm bảo nó tuân thủ cấu trúc được định nghĩa bởi interface.

```typescript
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Woof!");
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Output: Woof!
```

### 2.4 Thuộc tính tùy chọn (Optional Properties)

Interface có thể định nghĩa các thuộc tính tùy chọn bằng cách sử dụng dấu `?`.

```typescript
interface Person {
  name: string;
  age?: number; // Thuộc tính tùy chọn
}

const person1: Person = { name: "Alice" };
const person2: Person = { name: "Bob", age: 25 };

console.log(person1); // Output: { name: "Alice" }
console.log(person2); // Output: { name: "Bob", age: 25 }
```
