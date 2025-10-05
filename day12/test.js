let students = [
  { name: "loc", score: 4 },

  { name: "hoang", score: 9 },
  { name: "tuan", score: 88 },
];
let max = 0;
students.forEach((student) => {
  if (student.score > max) max = student.score;
});
console.log("Diem cao nhat", max);
let pass = students.filter((student) => {
  student.score >= 5;
});
console.log("Danh sach hoc sinh do: ", pass);

console.log(
  students.some((student) => {
    student.score > 3;
  })
);

// Tạo mảng students với các object { name, score }.
// Yêu cầu:

// Tìm học sinh điểm cao nhất
// Lọc học sinh đỗ (score >= 5)
// Kiểm tra xem có học sinh nào điểm dưới 3 không

//  Bài 1:
// Tạo mảng products gồm các object:

// { name: 'iPhone', price: 1000 }
// { name: 'Laptop', price: 1500 }
// { name: 'Mouse', price: 50 }
// Yêu cầu:

// In ra tên tất cả sản phẩm
// Thêm sản phẩm mới { name: 'Keyboard', price: 100 }
// Tìm sản phẩm có giá > 1000
//
