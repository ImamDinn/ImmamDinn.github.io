// =============
// Login Logout
// =============
const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");
const loginButton = document.querySelector(".loginnn");
const account = document.querySelector(".account-bar");
const logoutButton = document.querySelector(".logout-button");
const logoutButton1 = document.querySelector(".logout-button1");
const navbarToggle = document.querySelector(".navbar-toggle");
const navlist = document.querySelector(".nav-list");

if (token) {
  console.log("Token set!");
} else {
  console.log("Token tidak tersedia");
}
if (!user) {
  // Jika tidak ada pengguna maka logout button hilang ketika menu responsive
  logoutButton1.remove();
} else {
  // Jika ada data pengguna dalam local storage
  account.remove();
  logoutButton.style.display = "inline-block"; // Tampilkan tombol logout

  // Fungsi ini akan dijalankan saat dokumen HTML selesai dimuat
  document.addEventListener("DOMContentLoaded", function (token) {
    // Pilih elemen yang ingin Anda ganti isi nya
    const userName = document.querySelector(".loginnn");
    // Ubah isi elemen login
    userName.textContent = `Hello, ${user.username}`;
    // Menonaktifkan tombol login ketika berubah jadi user
    userName.disabled = true;
    userName.style.backgroundColor = "initial";
    userName.style.color = "#e2ede9";
    userName.style.cursor = "initial";
    const btnNavbar = document.querySelector(".btn-navbar");
    const aBtnNavbar = btnNavbar.querySelector("a");
    aBtnNavbar.style.cursor = "initial";
    // Styling username
    userName.style.paddingLeft = "10px";
    userName.style.textTransform = "capitalize";
    userName.style.fontSize = "13px";
    userName.style.fontWeight = "bolder";

    // Styling tombol account dan logout karena bermasalah
    const buttonNavbar = document.querySelector(".btn-navbar1");
    buttonNavbar.style.marginTop = "0px";
  });

  // Tambahkan elemen span untuk menampilkan nama pengguna
  const userNameSpan = document.createElement("span");
  userNameSpan.textContent = `Hello, ${user.username}`;

  // Sisipkan elemen span sebelum tombol logout
  const navbar = document.querySelector(".navbar-menu");
  navbar.insertBefore(userNameSpan, navbarToggle);

  // Tambahkan event listener untuk logoutButton
  logoutButton.addEventListener("click", function () {
    // Hapus data pengguna dari local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect ke halaman index.html
    window.location.href = "index.html";
  });

  // Eventlistener untuk tombol logout ketika responsive
  logoutButton1.addEventListener("click", function () {
    // Hapus data pengguna dari local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect ke halaman index.html
    window.location.href = "index.html";
  });
}
