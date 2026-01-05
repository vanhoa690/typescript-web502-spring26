# Giải thích cấu trúc project React TypeScript (với Vite)

Dựa trên hình ảnh bạn cung cấp, đây là cấu trúc thư mục của một dự án React được xây dựng bằng **Vite** và sử dụng **TypeScript**. Dự án này có thể là một ứng dụng web đơn giản như quản lý danh sách (todo list hoặc CRUD app), với các file như `Add.tsx`, `Edit.tsx`, `List.tsx`.

Cấu trúc này được tạo tự động khi chạy lệnh `npm create vite@latest -- --template react-ts`. Nó theo mô hình **client-side routing**, với thư mục `pages/` để tổ chức các trang.

## 1. Cấu trúc tổng thể

Dự án có 2 thư mục gốc chính: `assets/` và `src/`. Đây là layout chuẩn của Vite với sự điều chỉnh:

- **assets/**: chứa các file tĩnh như hình ảnh, favicon.
- **src/**: Thư mục nguồn code chính, nơi bạn viết logic ứng dụng.

Ngoài ra, có các file config ở root để quản lý dependencies, linting, và build.

| Thư mục/File                                | Mô tả                               | Vai trò chính                                 |
| ------------------------------------------- | ----------------------------------- | --------------------------------------------- |
| **src/assets/**                             | Thư mục file tĩnh (hình ảnh, icon). |
| **src/**                                    | Thư mục nguồn code                  | Chứa components, styles, assets, và pages.    |
| **package.json** (và lock)                  | Quản lý dependencies                | Liệt kê packages như React, TypeScript, Vite. |
| **tsconfig.json**                           | Config TypeScript                   | Định nghĩa rules cho TS compiler.             |
| **vite.config.ts**                          | Config Vite                         | Cấu hình build, plugins.                      |
| Các file khác (.gitignore, README.md, etc.) | Hỗ trợ dev                          | Bỏ qua file không cần git; hướng dẫn dự án.   |

## 2. Chi tiết `index.html`

- **index.html**: File HTML chính. Đây là "cửa ngõ" của app. React sẽ inject code JS vào thẻ `<div id="root"></div>`.

## 3. Chi tiết thư mục `src/`

Đây là "trái tim" của dự án, nơi code React + TS được viết. Cấu trúc con theo **feature-based**, với `pages/` cho routing.

- **assets/** (trong `src/`): Chứa hình ảnh, icons, hoặc file tĩnh khác (ví dụ: logo.svg).
- **pages/**: Tổ chức các "trang" của app (dùng React Router để map thành routes):

  - **Add.tsx**: Trang thêm mới (add item).
  - **Edit.tsx**: Trang chỉnh sửa (edit item).
  - **Layout.tsx**: Layout chung (header, footer, sidebar).
  - **List.tsx**: Trang danh sách (list items).

- Các file ở root `src/`:

  - **App.css**: Styles CSS cho component `App`.
  - **App.tsx**: Component gốc, chứa router và layout chính.
  - **index.css**: Styles global cho toàn app.
  - **main.tsx**: Entry point, mount app vào DOM.
  - **vite-env.d.ts**: File TypeScript declaration cho Vite.

- Các file hỗ trợ:
  - **.gitignore**: Bỏ qua node_modules, build files.
  - **README.md**: Hướng dẫn chạy dự án (`npm run dev` để start).
  - **db.json**: File JSON giả lập database (dùng json-server).
  - **eslint.config.js**: Config ESLint để lint code.
  - **package-lock.json**: Lock versions của dependencies.

## 4. Cách chạy và phát triển

- **Cài đặt**: `npm install`.
- **Dev mode**: `npm run dev` → Mở localhost:5173.
- **Build production**: `npm run build`.
- **Preview build**: `npm run preview`.

## 5. Lý do cấu trúc này tốt

- **Đơn giản & Scalable**: Dễ mở rộng bằng cách thêm folders như `components/`, `hooks/`.
- **TypeScript integration**: Giảm lỗi runtime.
- **Vite advantages**: Nhanh hơn CRA, hỗ trợ TS out-of-box.

Nếu cần chi tiết hơn (ví dụ: code mẫu), hãy cho tôi biết!
