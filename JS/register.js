// =========
// Register
// =========
var btn = document.getElementById("buttonRegister");
var username = document.getElementById("username");
var email = document.getElementById("email"); // Mendapatkan elemen input email
var password = document.getElementById("password");

btn.addEventListener("click", register);

function register(event) {
  event.preventDefault(); // Mencegah pengiriman formulir secara default

  // Mengambil nilai input dari elemen-elemen HTML
  var usernameValue = username.value;
  var emailValue = email.value;
  var passwordValue = password.value;

  // Validasi form
  if (!usernameValue || !emailValue || !passwordValue) {
    alert("Please fill in all fields."); // Menampilkan pesan alert jika ada field yang kosong
    return;
  }

  // Mengeksekusi permintaan HTTP POST ke server untuk melakukan registrasi
  fetch("https://crystal-curly-crocus.glitch.me/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: usernameValue,
      email: emailValue, // Menggunakan emailValue yang telah diambil dari input email
      password: passwordValue,
    }),
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(function (data) {
      alert(data.message);
    })
    .catch(function (error) {
      console.log(error);
    });
}
