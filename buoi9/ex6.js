let employees = [];
let editingId = null;

const form = document.getElementById('employeeForm');
const table = document.getElementById('employeeTable');
const submitBtn = document.getElementById('submitBtn');

// Xử lý form submit
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value);
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const position = document.getElementById('position').value;
  const note = document.getElementById('note').value;

  if (!name || age < 18 || age > 65) {
    alert("Dữ liệu không hợp lệ!");
    return;
  }

  if (editingId) {
    // Cập nhật
    const emp = employees.find(e => e.id === editingId);
    emp.name = name;
    emp.age = age;
    emp.gender = gender;
    emp.position = position;
    emp.note = note;
    editingId = null;
    submitBtn.textContent = "Thêm nhân viên";
  } else {
    // Thêm mới
    const newEmp = {
      id: Date.now(),
      name, age, gender, position, note
    };
    employees.push(newEmp);
  }

  renderTable();
  form.reset();
});

function renderTable() {
  table.innerHTML = "";
  employees.forEach((emp, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.age}</td>
        <td>${emp.gender}</td>
        <td>${emp.position}</td>
        <td>${emp.note}</td>
        <td>
          <button onclick="editEmployee(${emp.id})">Sửa</button>
          <button onclick="deleteEmployee(${emp.id})">Xoá</button>
        </td>
      </tr>`;
    table.innerHTML += row;
  });
}

window.editEmployee = function(id) {
  const emp = employees.find(e => e.id === id);
  document.getElementById('name').value = emp.name;
  document.getElementById('age').value = emp.age;
  document.querySelector(`input[name="gender"][value="${emp.gender}"]`).checked = true;
  document.getElementById('position').value = emp.position;
  document.getElementById('note').value = emp.note;
  editingId = id;
  submitBtn.textContent = "Cập nhật";
};

window.deleteEmployee = function(id) {
  if (confirm("Bạn có chắc muốn xoá nhân viên này không?")) {
    employees = employees.filter(e => e.id !== id);
    renderTable();
  }
};