const sochan = document.getElementById('sochan');
const gapdoi = document.getElementById('gapdoi');
const tong = document.getElementById('tong');
const relsut = document.getElementById('ketqua');
let mangs = [22, 34, 3, 53, 3];
sochan.addEventListener('click', () => {
    const num = mangs.filter((mang) => {
        return mang % 2 === 0;

    })
    relsut.textContent = "Các số chẵn là: " + num
    console.log(num)
})

gapdoi.addEventListener('click', () => {
    const nhandoi = mangs.map((mang) => {
        return mang * 2;
    });
    relsut.textContent = 'Mang gap doi la: ' + nhandoi
})

tong.addEventListener('click', () => {
    const sum = mangs.reduce((tong, phantu) =>
        tong + phantu, 0)
    relsut.textContent = " Tong cac phan tu la: " + sum;
})