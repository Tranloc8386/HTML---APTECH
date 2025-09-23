





function getGrade() {
    let nhapdiem = prompt("Nhập điểm:");

    if (nhapdiem >= 85 && nhapdiem <= 100) {
        console.log("A");
    } else if (nhapdiem >= 70 && nhapdiem <= 84) {
        console.log("B");
    } else if (nhapdiem >= 50 && nhapdiem <= 69) {
        console.log("C");
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