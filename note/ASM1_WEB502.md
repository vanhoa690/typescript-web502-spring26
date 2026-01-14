# ASM 1 – React + TypeScript

## Xây dựng giao diện Danh sách môn học

---

## Mục tiêu

- Làm quen với **React Function Component**
- Sử dụng **TypeScript** trong React
- Quản lý state với `useState`
- Render danh sách, xử lý **tìm kiếm (search)**, **lọc (filter)**, **phân trang (pagination)**
- Biết cách chia component hợp lý

---

## Yêu cầu chức năng

### 1. Hiển thị danh sách môn học

Mỗi môn học bao gồm các thông tin sau:

| Thuộc tính | Kiểu dữ liệu |
| ---------- | ------------ |
| id         | number       |
| name       | string       |
| credit     | number       |
| category   | string       |
| teacher    | string       |

Hiển thị danh sách dưới dạng **Table**.

---

### 2. Tìm kiếm môn học (Search)

- Có **ô input** cho phép người dùng nhập từ khóa
- Tìm kiếm theo **tên môn học**
- Không phân biệt chữ hoa – chữ thường

**Ví dụ:**  
Nhập `react` → Hiển thị môn _ReactJS Cơ Bản_

---

### 3. Lọc môn học (Filter)

- Lọc theo **loại môn học (category)**
- Sử dụng **Select Box**

**Danh sách category:**

- Tất cả
- Cơ sở
- Chuyên ngành
- Đại cương

---

### 4. Phân trang (Pagination)

- Mỗi trang hiển thị **5 môn học**
- Có nút chuyển trang:
  - Previous
  - Next
  - Hoặc số trang: 1 2 3 ...

---

## Dữ liệu mẫu (Mock Data)

```ts
export interface Subject {
  id: number;
  name: string;
  credit: number;
  category: string;
  teacher: string;
}

export const subjects: Subject[] = [
  {
    id: 1,
    name: "ReactJS Cơ Bản",
    credit: 3,
    category: "Chuyên ngành",
    teacher: "Nguyễn Văn A",
  },
  {
    id: 2,
    name: "TypeScript",
    credit: 2,
    category: "Chuyên ngành",
    teacher: "Trần Thị B",
  },
  {
    id: 3,
    name: "Cấu trúc dữ liệu",
    credit: 3,
    category: "Cơ sở",
    teacher: "Lê Văn C",
  },
  {
    id: 4,
    name: "Lập trình C",
    credit: 4,
    category: "Đại cương",
    teacher: "Phạm Văn D",
  },
];
```

---

## Cấu trúc project gợi ý

```
src/
├─ components/
│  ├─ SubjectList.tsx
│  ├─ SearchBox.tsx
│  ├─ FilterSelect.tsx
│  └─ Pagination.tsx
├─ types/
│  └─ Subject.ts
├─ App.tsx
└─ main.tsx
```

---

## Yêu cầu kỹ thuật

- React Function Component
- TypeScript (`interface`, `type`)
- Không cần backend (chỉ dùng mock data)
- Không dùng Redux
- CSS tự do (CSS thường / Tailwind CSS)

---

## Nâng cao (Không bắt buộc)

- Highlight từ khóa tìm kiếm
- Nút reset search & filter
- Responsive UI
- Dùng `useMemo` để tối ưu hiệu năng

---

## Yêu cầu nộp bài

- Nộp source code (GitHub hoặc file `.zip`)
- Có file `README.md` mô tả:
  - Chức năng chính
  - Cách chạy project

---

## Tiêu chí chấm điểm (Tham khảo)

| Nội dung           | Điểm        |
| ------------------ | ----------- |
| Hiển thị danh sách | 2           |
| Tìm kiếm           | 2           |
| Lọc                | 2           |
| Phân trang         | 2           |
| TypeScript         | 1           |
| UI & Clean code    | 1           |
| **Tổng**           | **10 điểm** |
