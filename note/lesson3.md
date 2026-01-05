# Hướng dẫn về Hàm trong TypeScript

Hướng dẫn này bao gồm các khái niệm chính về hàm trong TypeScript, bao gồm hàm mũi tên (arrow function), kiểu trả về, kiểu hàm, tham số, và cấu hình trình biên dịch TypeScript.

## 1.2 Hàm trả về giá trị (Function Return)
Hàm trong TypeScript có thể khai báo kiểu trả về rõ ràng bằng cách sử dụng dấu hai chấm (`:`) theo sau là kiểu dữ liệu sau danh sách tham số. Điều này đảm bảo an toàn kiểu cho giá trị trả về.

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;
```

Nếu hàm không trả về giá trị, nó ngầm định trả về `undefined` trừ khi được chỉ định khác (ví dụ: `void`).

## 1.3 Hàm như kiểu dữ liệu (Function as Types)
Bạn có thể định nghĩa kiểu của hàm bằng cách sử dụng type alias hoặc interface, chỉ định kiểu tham số và kiểu trả về. Điều này hữu ích cho các hàm callback hoặc chữ ký hàm.

```typescript
type MathOperation = (x: number, y: number) => number;

const subtract: MathOperation = (a, b) => a - b;

interface Logger {
  (message: string): void;
}

const log: Logger = (msg) => console.log(msg);
```

## 1.4 Hàm với tham số (Function with Parameters)
TypeScript cho phép bạn định nghĩa kiểu tham số một cách rõ ràng để đảm bảo an toàn kiểu.

```typescript
function greet(name: string, greeting: string): string {
  return `${greeting}, ${name}!`;
}
```

### 1.4.1 Tham số mặc định (Default Parameter)
Tham số mặc định cho phép gán giá trị mặc định nếu tham số không được cung cấp.

```typescript
function greetUser(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(greetUser("John")); // Kết quả: Hello, John!
console.log(greetUser("Jane", "Hi")); // Kết quả: Hi, Jane!
```

### 1.4.2 Tham số tùy chọn (Optional Parameter)
Tham số tùy chọn được đánh dấu bằng dấu `?` và có thể bị bỏ qua khi gọi hàm.

```typescript
function describePerson(name: string, age?: number): string {
  if (age) {
    return `${name} is ${age} years old.`;
  }
  return `${name} has no age specified.`;
}

console.log(describePerson("John")); // Kết quả: John has no age specified.
console.log(describePerson("Jane", 25)); // Kết quả: Jane is 25 years old.
```

### 1.4.3 Toán tử spread (Spread Operators)
Toán tử spread (`...`) cho phép truyền một mảng các giá trị vào hàm như các tham số riêng lẻ.

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Kết quả: 6
console.log(sum(4, 5, 6, 7)); // Kết quả: 22
```

### 1.4.4 Tham số rest (Rest Parameter)
Tham số rest cho phép hàm chấp nhận một số lượng không xác định các tham số dưới dạng một mảng.

```typescript
function printItems(prefix: string, ...items: string[]): void {
  items.forEach(item => console.log(`${prefix}: ${item}`));
}

printItems("Item", "Apple", "Banana", "Orange");
// Kết quả:
// Item: Apple
// Item: Banana
// Item: Orange
```

## 1.5 Hàm và Void (Function & Void)
Kiểu `void` được sử dụng cho các hàm không trả về giá trị hoặc trả về `undefined`.

```typescript
function logMessage(message: string): void {
  console.log(message);
}
```

## 1.6 Never và Void (Never & Void)
Kiểu `never` biểu thị một hàm không bao giờ hoàn thành (ví dụ: ném lỗi hoặc chạy vòng lặp vô hạn). `Void` khác với `never` vì `void` cho phép trả về `undefined`.

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

## 2.1 Chế độ theo dõi (Watch Mode)
TypeScript hỗ trợ chế độ theo dõi (`--watch` hoặc `-w`) để tự động biên dịch lại khi có thay đổi trong mã nguồn.

```bash
tsc --watch
```

Lệnh này sẽ theo dõi các tệp TypeScript và biên dịch lại khi chúng thay đổi.

## 2.2 Biên dịch toàn bộ dự án với nhiều tệp (Compiling the Entire Project with Multiple Files)
Để biên dịch nhiều tệp TypeScript, bạn có thể chỉ định từng tệp hoặc sử dụng tệp cấu hình `tsconfig.json`.

```bash
tsc file1.ts file2.ts
```

Tuy nhiên, sử dụng `tsconfig.json` là cách phổ biến để quản lý các dự án lớn với nhiều tệp.

## 2.3 Tệp tsconfig.json
Tệp `tsconfig.json` chứa các cấu hình cho trình biên dịch TypeScript. Nó giúp xác định cách TypeScript biên dịch mã nguồn.

### 2.3.1 Bao gồm và loại trừ tệp (Including & Excluding Files)
Bạn có thể chỉ định các tệp hoặc thư mục để bao gồm hoặc loại trừ trong quá trình biên dịch.

```json
{
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

- `include`: Chỉ định các tệp hoặc thư mục cần biên dịch.
- `exclude`: Loại trừ các tệp hoặc thư mục không muốn biên dịch.

### 2.3.2 Target và Lib (Target & Lib)
- `target`: Xác định phiên bản JavaScript đầu ra (ví dụ: `ES5`, `ES6`, `ESNext`).
- `lib`: Chỉ định các thư viện TypeScript sử dụng (ví dụ: `DOM`, `ES6`).

```json
{
  "compilerOptions": {
    "target": "ES6",
    "lib": ["DOM", "ES6"]
  }
}
```

### 2.3.3 Cấu hình bổ sung và Source Map (More Configuration & Source Map)
Source map giúp ánh xạ mã JavaScript đã biên dịch về mã TypeScript gốc, hữu ích cho việc gỡ lỗi.

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "strict": true,
    "noImplicitAny": true
  }
}
```

- `sourceMap`: Tạo tệp `.map` để gỡ lỗi.
- `strict`: Kích hoạt các kiểm tra nghiêm ngặt.
- `noImplicitAny`: Báo lỗi nếu tham số hoặc biến không có kiểu rõ ràng.

### 2.3.4 rootDir và outDir
- `rootDir`: Thư mục gốc chứa các tệp TypeScript.
- `outDir`: Thư mục đầu ra cho các tệp JavaScript đã biên dịch.

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```