const sum = document.getElementById('tong');
const nut = document.getElementById('button');
let mangs = [1, 2, 3, 4, 5];


nut.addEventListener("click", () => {
    let sumif = 0;
    for (let i = 0; i < mangs.length; i++) {
        sumif = sumif + mangs[i];

    }
    sum.textContent="Tong la:"+ sumif
    console.log(sumif);
})
mangs.forEach((value, index) => {
    console.log("Phần tử ở vị trí " + index + " là: " + value);
});