// ======
// Login
// ======
var btn = document.getElementById("buttonLogin");
var username = document.getElementById("username");
var password = document.getElementById("password");

btn.addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah pengiriman formulir secara default dengan metode GET

  fetch("https://crystal-curly-crocus.glitch.me/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
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
      const user = data.data.user; // Data pengguna
      const token = data.data.token; // Token
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      window.location.replace("index.html");
    })
    .catch(function (error) {
      console.log(error);
    });
});
