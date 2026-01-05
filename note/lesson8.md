# 🧩 Hướng dẫn: React Hook Form + Zod

## 🧠 Giới thiệu

Trong hướng dẫn này, bạn sẽ học cách xây dựng **form thêm sản phẩm** với:

- 🧩 `React Hook Form` để quản lý form
- ✅ `Zod` để xác thực dữ liệu

---

## ⚙️ 1. Cài đặt các thư viện

```bash
npm install react-hook-form zod @hookform/resolvers
```

---

## 🧩 2. Tạo schema validate với Zod

Tạo file `product.schema.ts`:

```ts
import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Tên sản phẩm không được để trống"),
  price: z.number().min(1, "Giá phải lớn hơn 0"),
  category: z.string().min(1, "Danh mục không được để trống"),
});

export type ProductFormData = z.infer<typeof productSchema>;
```

---

## 🧾 3. Tạo form thêm sản phẩm (UI với Bootstrap)

Tạo file `AddProductForm.tsx`:

```tsx
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, ProductFormData } from "./product.schema";

export const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = async (data: ProductFormData) => {
    try {
      await axios.post("http://localhost:3000/products", data);
      toast.success(" Thêm sản phẩm thành công!");
      reset();
    } catch (error) {
      toast.error(" Lỗi khi thêm sản phẩm!");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">🛒 Thêm sản phẩm</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label fw-semibold">Tên sản phẩm</label>
          <input
            type="text"
            {...register("name")}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Giá</label>
          <input
            type="number"
            {...register("price", { valueAsNumber: true })}
            className={`form-control ${errors.price ? "is-invalid" : ""}`}
          />
          {errors.price && (
            <div className="invalid-feedback">{errors.price.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Danh mục</label>
          <input
            type="text"
            {...register("category")}
            className={`form-control ${errors.category ? "is-invalid" : ""}`}
          />
          {errors.category && (
            <div className="invalid-feedback">{errors.category.message}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Đang lưu..." : "Thêm sản phẩm"}
        </button>
      </form>
    </div>
  );
};
```

---

## ✅ 5. Kết quả

Khi nhấn **Thêm sản phẩm**:

- Nếu hợp lệ → Gửi request POST → hiển thị toast "Thêm sản phẩm thành công".
- Nếu lỗi (ví dụ server tắt) → hiển thị toast đỏ "Lỗi khi thêm sản phẩm".
- Input lỗi hiển thị bằng `is-invalid` (Bootstrap).

---

## 📚 Tổng kết

| Thành phần          | Vai trò                   |
| ------------------- | ------------------------- |
| **React Hook Form** | Quản lý form & lỗi        |
| **Zod**             | Validate dữ liệu          |
| **Bootstrap**       | Giao diện đẹp nhanh chóng |
| **React Hot Toast** | Hiển thị thông báo        |
| **Axios**           | Gọi API POST tới server   |

---

> 🔗 **Tham khảo:**
>
> - [React Hook Form](https://react-hook-form.com/)
> - [Zod](https://zod.dev/)
> - [Bootstrap](https://getbootstrap.com/)
> - [React Hot Toast](https://react-hot-toast.com/)
> - [JSON Server](https://github.com/typicode/json-server)
