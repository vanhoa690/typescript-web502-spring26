# TypeScript: Advanced Types and Generics

TypeScript cung cấp nhiều tính năng nâng cao để quản lý kiểu dữ liệu phức tạp và tạo mã linh hoạt, tái sử dụng. Bài viết này sẽ trình bày các khái niệm quan trọng liên quan đến **Intersection Types**, **Type Guards**, **Discriminated Unions**, **Type Casting**, và **Generics** trong TypeScript, với các ví dụ minh họa bằng tiếng Việt.

## 1. Intersection Types (Kiểu Giao nhau)

Intersection Types cho phép kết hợp nhiều kiểu dữ liệu thành một kiểu mới, chứa tất cả các thuộc tính của các kiểu được kết hợp.

```typescript
interface Person {
  fullName: string;
  age: number;
}

interface Employee {
  employeeId: string;
  position: string;
}

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  fullName: "Nguyễn Văn A",
  age: 30,
  employeeId: "EMP001",
  position: "Manager",
};

console.log(employee); // { fullName: "Nguyễn Văn A", age: 30, employeeId: "EMP001", position: "Manager" }
```

**Giải thích**: `EmployeePerson` là một kiểu giao nhau, yêu cầu đối tượng phải có tất cả các thuộc tính của `Person` và `Employee`.

## 2. More on Type Guards (Bảo vệ Kiểu Nâng cao)

Type Guards giúp TypeScript thu hẹp kiểu dữ liệu trong một khối mã dựa trên điều kiện kiểm tra.

```typescript
function processData(data: string | number) {
  if (typeof data === "string") {
    console.log(data.toUpperCase()); // TypeScript biết data là string
  } else {
    console.log(data.toFixed(2)); // TypeScript biết data là number
  }
}

processData("hello"); // "HELLO"
processData(42); // "42.00"
```

**Giải thích**: Sử dụng `typeof` để kiểm tra kiểu dữ liệu, TypeScript sẽ tự động thu hẹp kiểu trong các khối `if` và `else`.

## 3. Discriminated Unions (Liên minh Phân biệt)

Discriminated Unions là một mẫu thiết kế sử dụng một thuộc tính chung (thường là `kind` hoặc `type`) để phân biệt giữa các kiểu trong một union type.

```typescript
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

type Shape = Circle | Square;

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default:
      throw new Error("Invalid shape");
  }
}

const circle: Circle = { kind: "circle", radius: 5 };
const square: Square = { kind: "square", side: 4 };

console.log(calculateArea(circle)); // ~78.54
console.log(calculateArea(square)); // 16
```

**Giải thích**: Thuộc tính `kind` giúp TypeScript xác định kiểu cụ thể trong union, đảm bảo truy cập đúng thuộc tính như `radius` hoặc `side`.

## 4. Type Casting (Ép kiểu)

Type Casting cho phép chỉ định một kiểu cụ thể cho một biến, thường sử dụng với `as` hoặc `<Type>`.

```typescript
let someValue: any = "I am a string";

let stringLength: number = (someValue as string).length;
console.log(stringLength); // 16

// Hoặc sử dụng cú pháp <>
let stringLength2: number = (<string>someValue).length;
console.log(stringLength2); // 16
```

**Giải thích**: Ép kiểu giúp TypeScript hiểu rằng `someValue` là một chuỗi để gọi phương thức `length`. Tuy nhiên, cần cẩn thận vì ép kiểu sai có thể gây lỗi runtime.

## 5. Enum trong TypeScript

**Enum** (viết tắt của "Enumeration") là một tính năng trong TypeScript cho phép định nghĩa một tập hợp các giá trị được đặt tên, thường được sử dụng để biểu diễn một nhóm các hằng số liên quan. Enum giúp mã dễ đọc hơn và tổ chức các giá trị cố định một cách rõ ràng.

### Cú pháp và ví dụ

```typescript
enum Status {
  Success,
  Error,
  Loading,
}

let currentStatus: Status = Status.Success;

console.log(currentStatus); // 0 (giá trị số mặc định)
console.log(Status.Success); // 0
console.log(Status.Error); // 1
console.log(Status.Loading); // 2
```

**Giải thích**:

- Mặc định, TypeScript gán giá trị số (bắt đầu từ 0) cho các thành viên của enum.
- Có thể truy cập giá trị enum bằng cách sử dụng `Status.Success` hoặc `Status[0]` (trả về tên: "Success").
- Có thể gán giá trị cụ thể (số hoặc chuỗi) cho enum:

```typescript
enum StatusWithValues {
  Success = "SUCCESS",
  Error = "ERROR",
  Loading = "LOADING",
}

let appStatus: StatusWithValues = StatusWithValues.Success;
console.log(appStatus); // "SUCCESS"
```

### Các loại Enum

1. **Numeric Enum**: Giá trị là số (mặc định hoặc tự chỉ định).
2. **String Enum**: Giá trị là chuỗi.
3. **Heterogeneous Enum**: Kết hợp số và chuỗi (ít được sử dụng).

```typescript
enum MixedEnum {
  Code = 1,
  Name = "OK",
}
```

## MỤC TIÊU: Generics trong TypeScript

Generics cho phép viết các hàm, lớp hoặc interface tái sử dụng với các kiểu dữ liệu linh hoạt.

### 6. First Generic Method (Phương thức Generic đầu tiên)

```typescript
function printArray<T>(array: T[]): T[] {
  console.log(array);
  return array;
}

const numberArray: number[] = [1, 2, 3];
const stringArray: string[] = ["a", "b", "c"];

printArray(numberArray); // [1, 2, 3]
printArray(stringArray); // ["a", "b", "c"]
```

**Giải thích**: `T` là một tham số kiểu, cho phép hàm `printArray` hoạt động với bất kỳ kiểu dữ liệu nào.

### 7. Another Generic Function (Hàm Generic khác)

```typescript
function getFirstElement<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined
```

**Giải thích**: Hàm generic này trả về phần tử đầu tiên của mảng, với kiểu dữ liệu được xác định bởi tham số `T`.

### 8. Keyof Constraint (Ràng buộc Keyof)

`keyof` được sử dụng để giới hạn generic type chỉ lấy các khóa của một đối tượng.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { fullName: "Nguyễn Văn A", age: 30 };
console.log(getProperty(person, "fullName")); // "Nguyễn Văn A"
console.log(getProperty(person, "age")); // 30
```

**Giải thích**: `K extends keyof T` đảm bảo `key` chỉ có thể là các thuộc tính của đối tượng `T`, giúp truy cập an toàn.

### 9. Generic Class (Lớp Generic)

Generic cũng có thể được sử dụng trong các lớp để tạo các cấu trúc tái sử dụng.

```typescript
class DataBox<T> {
  private content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }

  setContent(content: T): void {
    this.content = content;
  }
}

const numberBox = new DataBox<number>(42);
console.log(numberBox.getContent()); // 42

const stringBox = new DataBox<string>("Hello");
console.log(stringBox.getContent()); // "Hello"
```

**Giải thích**: Lớp `DataBox` sử dụng generic `T` để lưu trữ và quản lý dữ liệu với bất kỳ kiểu nào.

---

## Kết luận

Các tính năng nâng cao như **Intersection Types**, **Type Guards**, **Discriminated Unions**, **Type Casting**, và **Generics** giúp TypeScript trở nên mạnh mẽ trong việc quản lý kiểu dữ liệu phức tạp. Generics đặc biệt hữu ích khi cần viết mã linh hoạt, tái sử dụng mà vẫn đảm bảo an toàn kiểu. Hãy thực hành các ví dụ trên để nắm vững các khái niệm này!
