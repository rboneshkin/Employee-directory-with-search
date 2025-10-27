const employees = [
  { name: "Aarav Sharma", role: "Software Engineer", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Priya Mehta", role: "UI/UX Designer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Rohan Patel", role: "Project Manager", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Ananya Gupta", role: "QA Engineer", img: "https://randomuser.me/api/portraits/women/46.jpg" },
  { name: "Vikram Nair", role: "Data Analyst", img: "https://randomuser.me/api/portraits/men/47.jpg" },
  { name: "Sneha Iyer", role: "HR Executive", img: "https://randomuser.me/api/portraits/women/49.jpg" },
  { name: "Arjun Das", role: "DevOps Engineer", img: "https://randomuser.me/api/portraits/men/41.jpg" },
  { name: "Kavya Reddy", role: "Marketing Lead", img: "https://randomuser.me/api/portraits/women/40.jpg" }
];

const directory = document.getElementById("employeeDirectory");

function renderEmployees(list) {
  directory.innerHTML = "";
  list.forEach((emp, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <img src="${emp.img}" alt="${emp.name}">
      <h3>${emp.name}</h3>
      <p>${emp.role}</p>
    `;
    directory.appendChild(card);
  });
}

renderEmployees(employees);

document.getElementById("searchInput").addEventListener("keyup", function () {
  const query = this.value.toLowerCase();
  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(query) || emp.role.toLowerCase().includes(query)
  );
  renderEmployees(filtered);
});
