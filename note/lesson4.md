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
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
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

- **Readonly**: Thuộc tính được khai báo `readonly` chỉ có thể được gán giá trị trong constructor và không thể thay đổi sau đó.

```typescript
class Person {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("Alice");
// person.name = "Bob"; // Lỗi: Cannot assign to 'name' because it is a read-only property
```

### 1.4 Kế thừa (Inheritance)
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

### 1.5 Phương thức ghi đè (Overriding) & Protected Modifier
- **Protected**: Thuộc tính hoặc phương thức được khai báo `protected` có thể được truy cập trong class chứa nó và các class con.

- **Overriding**: Class con có thể ghi đè (override) các phương thức của class cha bằng cách định nghĩa lại phương thức với cùng tên.

```typescript
class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  protected move(): void {
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(): void {
    console.log(`${this.name} is running`); // Ghi đè phương thức move
  }
}

const dog = new Dog("Buddy");
dog.move(); // Output: Buddy is running
```

### 1.6 Phương thức và thuộc tính với Static
Từ khóa `static` cho phép định nghĩa các thuộc tính hoặc phương thức thuộc về class, không cần tạo instance để truy cập.

```typescript
class MathUtils {
  static PI: number = 3.14159;

  static calculateArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

console.log(MathUtils.PI); // Output: 3.14159
console.log(MathUtils.calculateArea(5)); // Output: 78.53975
```

### 1.7 Abstract Classes
Class trừu tượng (abstract class) là class không thể khởi tạo trực tiếp và thường được dùng làm lớp cơ sở cho các class con. Các phương thức trừu tượng (abstract method) phải được triển khai trong class con.

```typescript
abstract class Shape {
  abstract calculateArea(): number;
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.calculateArea()); // Output: 78.53981633974483
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

### 2.4 Readonly Properties
Interface cũng hỗ trợ thuộc tính `readonly`, tương tự như trong class, để ngăn việc thay đổi giá trị sau khi khởi tạo.

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 30; // Lỗi: Cannot assign to 'x' because it is a read-only property
```

### 2.5 Thuộc tính tùy chọn (Optional Properties)
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