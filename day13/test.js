// $(document).ready(function () {
//   console.log("Ready");
//   $("#nhap").click(() => {
//     $("#vanban").toggle();
//   });
// });
const tableBody = document.getElementById("tableBody");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    users.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.gmail}</td>
       <td><button data-id="${user.id}">Xem chi tiết</button></td>
        `;
        tableBody.appendChild(row);
    });
  })
  .catch((err) => console.error(err));

  document.querySelectorAll(".detail-btn").forEach((btn)=>{
    btn.addEventListener('click',()=>{
        const userId =btn.CDATA_SECTION_NODE.id;
        fetch
    })
  })
