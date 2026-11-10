/*
 * MTHONG IOSVN — DANH SÁCH SẢN PHẨM
 * Không cần đăng nhập, không cần Supabase.
 *
 * Cách sửa:
 * 1. Thêm/sửa/xóa các mục trong mảng PRODUCTS bên dưới.
 * 2. Đổi image thành đường dẫn ảnh (ví dụ: ./images/ten-anh.jpg).
 * 3. Đổi buyUrl thành link bot/đặt hàng của sản phẩm.
 * 4. Lưu file và tải lại website.
 *
 * Lưu ý: Đây là website tĩnh. Muốn cập nhật sản phẩm, bạn sửa file này
 * rồi upload đè lên hosting. Không có trang Admin công khai để tránh
 * người lạ tự ý sửa hoặc xóa sản phẩm.
 */
const PRODUCTS = [
  // Mẫu sản phẩm — nhân bản khối này để thêm sản phẩm mới:
  // {
  //   name: "Tên sản phẩm",
  //   description: "Mô tả ngắn về sản phẩm.",
  //   price: "Từ 20.000đ",
  //   duration: "1 ngày / 7 ngày / 30 ngày",
  //   image: "./images/product.jpg",
  //   buyUrl: "https://t.me/Mthongiosvnbot?start=shop"
  // }
];

(function renderProducts() {
  const root = document.getElementById("product-grid");
  if (!root) return;

  const esc = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

  if (!PRODUCTS.length) {
    root.innerHTML = '<div class="product-empty">Sản phẩm đang được cập nhật. Vui lòng liên hệ Admin để được tư vấn.</div>';
    return;
  }

  root.innerHTML = PRODUCTS.map(product => `
    <article class="product-card">
      ${product.image ? `<img src="${esc(product.image)}" alt="${esc(product.name)}" loading="lazy">` : ""}
      <div class="pc-body">
        <h3>${esc(product.name)}</h3>
        <p>${esc(product.description)}</p>
        ${product.price ? `<div class="product-price">${esc(product.price)}</div>` : ""}
        ${product.duration ? `<small>${esc(product.duration)}</small>` : ""}
        <div class="product-actions">
          ${product.buyUrl ? `<a href="${esc(product.buyUrl)}" target="_blank" rel="noopener noreferrer">Mua ngay</a>` : ""}
          <a href="https://t.me/Mthongiosvn" target="_blank" rel="noopener noreferrer">Liên hệ</a>
        </div>
      </div>
    </article>
  `).join("");
})();
