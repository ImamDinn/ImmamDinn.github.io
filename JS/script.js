// =================
// responsive navbar
// =================
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.getElementById("navbar-toggle");
  const navList = document.querySelector(".nav-list");

  navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navList.classList.toggle("active");
  });
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    navbarToggle.classList.remove("active");
    navList.classList.remove("active");
  })
);
