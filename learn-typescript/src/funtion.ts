// Funtion co Return, params
function add(a: number, b: number): number {
  return a + b;
}

const addResult = (a: number, b: number): number => a + b;

add(2, 3); //5
addResult(4, 5); // 9
// add(undefined, null); // error

// Funtion khong co Return: kieu void
function logMessage(message: string): void {
  console.log("Message:", message);
}

// props trong react sang  component : onClick: () => void
// props trong react sang  component : onSearch: (keyword: string) => string

// 3. Tham số mặc định (Default Parameter)
function greetUser(name: string, greeting: string | number = "hello"): string {
  return `${greeting}, ${name}!`;
}

greetUser("Alice"); // "hello, Alice!"
greetUser("Alice", "Xin Chao"); // "Xin Chao, Alice!"
