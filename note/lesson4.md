# TypeScript cơ bản: Class, Interface và Object Type

## 1. Class trong TypeScript

### 1.1 Class là gì?

Class dùng để tạo ra các đối tượng có thuộc tính và phương thức.

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Xin chào, tôi là ${this.name}`);
  }
}

const p = new Person("An", 20);
p.greet();
```

---

## 2. Interface

### 2.1 Interface là gì?

Interface trong TypeScript được sử dụng để định nghĩa cấu trúc (shape) của một đối tượng, đảm bảo rằng các đối tượng tuân thủ một hợp đồng (contract) nhất định.

```ts
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Hòa",
  age: 25,
};
```

### 2.2 Thuộc tính tùy chọn (Optional)

```ts
interface Person {
  name: string;
  age?: number;
}
```

### 2.3 Interface cho Function

```ts
interface SumFunction {
  (a: number, b: number): number;
}

const sum: SumFunction = (a, b) => a + b;
```

---

## 3. Type Object trong TypeScript

### 3.1 Type Object cơ bản

```ts
type Product = {
  id: number;
  name: string;
  price: number;
};
```

### 3.2 Type với Union

```ts
type Status = "pending" | "success" | "error";
```

### 3.3 Type kết hợp Object

```ts
type User = {
  id: number;
  name: string;
};

type UserResponse = User & {
  token: string;
};
```

---

## 4. Bài tập thực hành

### Bài 1

Tạo type Student gồm id, name, score.

### Bài 2

Tạo interface User có id, email là required, còn phone optional.

### Bài 3

Tạo type function Calculate cho phép cộng và nhân.
Nhận 2 số a, b

Trả về number
Viết hàm:

add(a, b)

multiply(a, b)

### Bài 4

Tạo type ApiStatus gồm: "idle" | "loading" | "success" | "error"

Viết function logStatus(status: ApiStatus)
Nếu:

loading → in "Đang tải..."

success → in "Thành công"

error → in "Có lỗi xảy ra"
