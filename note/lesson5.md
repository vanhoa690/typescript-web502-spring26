# TypeScript – Kiểu nâng cao & Generics

---

## 1. Intersection Types (Gộp nhiều kiểu)

Dùng khi **1 object cần có đầy đủ thuộc tính của nhiều kiểu**.

```ts
type Person = {
  name: string;
};

type Employee = {
  employeeId: string;
};

type EmployeePerson = Person & Employee;

const emp: EmployeePerson = {
  name: "hoadv",
  employeeId: "GV001",
};
```

---

## 2. Type Guards (Nhận biết kiểu tự động)

`typeof` Giúp TypeScript hiểu biến đang là kiểu gì trong `if`.

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

---

## 3. Type Casting (Ép kiểu)

Dùng khi bạn **biết chắc kiểu dữ liệu**, nhưng TypeScript không biết.

```ts
let value: any = "hello";
let len = (value as string).length;
```

**Cẩn thận vì ép sai có thể gây lỗi runtime.**

---

## 4. Enum

Dùng cho các **giá trị cố định**.

```ts
enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
}

let s: Status = Status.Success;
```

---

## 5. Generic Type

```ts
function identity<T>(value: T): T {
  return value;
}

identity(10);
identity("hello");
```

```ts
interface ApiResponse<T> {
  message: string;
  code: number;
  success: boolean;
  data: T;
}
```

---
