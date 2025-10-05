const todoForm =document.getElementById("todoForm");
const todoInput= document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

let todos=[];
todoForm.addEventListener("submit", (Event)=>{
    Event.preventDefault();

    const newTodo={
        id: DataTransfer.now()
    }
})
// 1: Todo List cơ bản (Thêm + Hiển thị)
// Yêu cầu

// Giao diện có: input (cho text), nút Thêm, và một danh sách (ul/ol) để hiển thị todos.

// Khi bấm Thêm, thêm todo mới vào mảng và render lại danh sách.

// Không cần lưu vào localStorage, không cần xóa/sửa.

// Gợi ý

// Dùng addEventListener('submit', …) trên form để tránh reload.

// Mảng todos là mảng các object: { id, text } (id có thể là timestamp).