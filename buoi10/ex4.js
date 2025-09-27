// Bài 4 — Thêm phần tử vào danh sách
// Mô tả: Có một danh sách và một nút Thêm.
// Yêu cầu: Khi bấm Thêm, tạo một li mới với nội dung "Item mới" rồi chèn vào danh sách.
// Gợi ý: document.createElement("li"), appendChild.
const an = document.getElementById('nut');
const hah = document.getElementById('ok');

an.addEventListener("click", () => {
   const li =document.createElement('li');
   li.textContent="itemps moi";
//    document.getElementById('ok').appendChild(li);
    hah.appendChild(li);
})