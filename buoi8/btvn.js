// <!-- Bài 1: Viết một hàm getGrade(score) nhận vào điểm số (0 → 100) và trả về kết quả:
// "A" nếu điểm ≥ 85
// "B" nếu điểm từ 70 → 84
// "C" nếu điểm từ 50 → 69
// "D" nếu điểm < 50

// Bài 2. Viết một hàm calculateElectricBill(kwh) tính tiền điện theo quy tắc:
// 0 – 50 kWh: 1.500 đ/kWh
// 51 – 100 kWh: 2.000 đ/kWh
// Trên 100 kWh: 3.000 đ/kWh -->



function getGrade() {
    let nhapdiem = prompt("Nhập điểm:");

    if (nhapdiem >= 85 && nhapdiem <= 100) {
        console.log("A");
    } else if (nhapdiem >= 70 && nhapdiem <= 84) {
        console.log("B");
    } else if (nhapdiem >= 50 && nhapdiem <= 69) {
        console.log("C")
    } else if (nhapdiem >= 0 && nhapdiem < 50) {
        console.log("D");
    } else {
        console.log("Không hợp lệ");
    }
}
getGrade();

function calculateElectricBill() {
    let kWh = prompt(" Nhap kWh: ");
    let Sotien;
    if (kWh >= 0 && kWh <= 50) {
        Sotien = kWh * 1.500;
        console.log(Sotien + "vnd");
    }
    else if (kWh > 50 && kWh <= 100) {
        Sotien = 50 * 1.500 + (kWh - 50) * 2.000;
        console.log(Sotien + "vnd");
    }
    else if (kWh > 100) {
        Sotien = 50 * 1.500 + 50 * 2.000 + (kWh - 100) * 3.000;
        console.log(Sotien + "vnd");
    } else {
        console.log("Khong hop le");
    }

}
calculateElectricBill();