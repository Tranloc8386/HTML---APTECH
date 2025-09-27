// Bài 2 — Thay đổi màu nền
// Mô tả: Có thẻ div có width và height là 100px, background mặc định là gray, và 3 nút: Đỏ, Xanh, Vàng.
// Yêu cầu: Khi bấm từng nút, đổi màu nền của #box tương ứng.
const al = document.getElementById('do');
const bl = document.getElementById('xanh');
const cl = document.getElementById('vang');
const nl = document.getElementById('tong');

al.addEventListener('click', () => {
    nl.style.backgrounColor = 'red';
});
bl.addEventListener('click', () => {
    nl.style.backgroundColor = 'green';
});
cl.addEventListener('click', () => {
    nl.style.backgroundColor = 'yellow';
});