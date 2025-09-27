// Bài 5 — Lấy giá trị từ input
// Mô tả: Có input nhập tên của bạn và nút Chào.
// Yêu cầu: Khi bấm nút, hiển thị alert "Xin chào, {tên}" với tên lấy từ input.
// // Gợi ý: document.getElementById("name").value

const al = document.getElementById('nut');
const el = document.getElementById('name');

al.addEventListener("click", ()=>{
    alert('Xin chao '+ el.value);
})