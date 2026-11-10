# Mthong iOSVN — Website không cần đăng nhập

## Bộ file gồm
- `index.html`: website chính, công cụ UnityFS, hướng dẫn, sản phẩm và liên hệ.
- `products.js`: danh sách sản phẩm để bạn tự thêm/sửa/xóa.
- `manifest.webmanifest`, `sw.js`, `icon.svg`: hỗ trợ PWA và biểu tượng.

## Không cần đăng nhập / không cần cơ sở dữ liệu
Bản này đã bỏ trang Admin đăng nhập, Supabase và các bước cấu hình backend.
Khách truy cập website không cần tài khoản.

## Cách thêm hoặc sửa sản phẩm
1. Mở `products.js` bằng trình soạn thảo văn bản.
2. Trong mảng `PRODUCTS`, bỏ dấu `//` ở khối mẫu và thay nội dung.
3. Ví dụ:

```js
const PRODUCTS = [
  {
    name: "Migul Pro",
    description: "Thông tin và mô tả sản phẩm.",
    price: "65.000đ",
    duration: "1 ngày",
    image: "./images/migul-pro.jpg",
    buyUrl: "https://t.me/Mthongiosvnbot?start=shop"
  }
];
```

4. Muốn thêm nhiều sản phẩm, thêm dấu phẩy sau `}` rồi sao chép khối tiếp theo.
5. Upload `products.js` và ảnh (nếu có) lên cùng hosting, giữ nguyên cấu trúc thư mục.

## Đưa website lên GitHub Pages
1. Giải nén ZIP.
2. Tạo repository GitHub và upload toàn bộ file trong thư mục.
3. Vào **Settings → Pages → Deploy from a branch → main → /(root)**.
4. Mở đường dẫn GitHub Pages được cấp.

## Lưu ý
- Đây là website tĩnh, không cần đăng nhập và không cần Supabase.
- Muốn cập nhật sản phẩm, bạn chỉnh `products.js` rồi upload đè lên hosting.
- Không có trang quản trị công khai. Nếu cho phép sửa/xóa sản phẩm trực tiếp trên web mà không đăng nhập, bất kỳ khách truy cập nào cũng có thể thay đổi nội dung.
- Công cụ UnityFS xử lý trên trình duyệt; website không tự động thanh toán hay xác nhận giao dịch.
