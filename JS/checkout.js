window.onload = function () {
  var subjectSel = document.getElementById("subject");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function () {
    chapterSel.length = 1;
    topicSel.length = 1;
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  };
  topicSel.onchange = function () {
    chapterSel.length = 1;
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  };
};

//Alert Checkout
document.addEventListener("DOMContentLoaded", function () {
  // Temukan tombol "Checkout" berdasarkan kelas "btn"
  const checkoutButton = document.querySelector(".btn[value='Checkout']");

  checkoutButton.addEventListener("click", function (event) {
    // Dapatkan elemen-elemen input yang perlu divalidasi
    const fullNameInput = document.querySelector("#fname");
    const emailInput = document.querySelector("#email");
    const addressInput = document.querySelector("#adr");
    const transferBankInput = document.querySelector("#transferbank");
    const expeditionInput = document.querySelector("#expedition");

    // Validasi formulir secara manual
    if (
      fullNameInput.value === "" ||
      emailInput.value === "" ||
      addressInput.value === "" ||
      transferBankInput.value === "" ||
      expeditionInput.value === ""
    ) {
      // Jika ada elemen yang belum diisi, tampilkan peringatan
      alert("Please fill out all the required fields before checking out.");
    } else {
      // Jika semua input terisi, tampilkan pesan alert
      alert("Your order has been received");
      window.location.href = "products.html";
    }

    // Mencegah perilaku default dari tombol "Checkout"
    event.preventDefault();
  });
});
