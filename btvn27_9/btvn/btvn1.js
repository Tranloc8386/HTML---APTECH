const students = [
  { name: 'An', age: 20 },
  { name: 'Binh', age: 21 },
  { name: 'Chau', age: 20 },
  { name: 'Dung', age: 22 },
];

let groups = students.reduce((acc, student) => {
  (acc[student.age] ??= []).push(student.name);
  return acc;
}, {});

for (let tuoi in groups) 
  console.log(`Tuổi ${tuoi}: ${groups[tuoi].join(", ")}`);