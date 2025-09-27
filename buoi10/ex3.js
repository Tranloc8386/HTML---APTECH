// Bài 3 — Ẩn/hiện phần tử
// Mô tả: Có đoạn văn trong thẻ p và 2 nút Ẩn và Hiện.
// Yêu cầu:
// Bấm Ẩn → đoạn văn biến mất.
// Bấm Hiện → đoạn văn xuất hiện lại.
// Gợi ý: element.style.display = "none";

const van = document.getElementById('doanvan');
const on = document.getElementById('button_hien');
const off = document.getElementById('button_an');


on.addEventListener('click', () => {
    van.style.display = " block";
});
off.addEventListener('click', () => {
    van.style.display = "none";
})
