if (currentQuantity === 1) {
  // Hapus produk dari keranjang jika jumlahnya adalah 1
  cartList.removeChild(cartItem);
  cartTotal -= itemPrice;

  // Kurangi jumlah produk di keranjang
  cartQuantity--;

  // Perbarui tampilan jumlah produk di keranjang
  document.querySelector(".total").textContent = `Rp. ${cartTotal}`;
  document.querySelector(".quantity").textContent = cartQuantity;

  // Perbarui ikon keranjang belanja
  const cartIcon = document.getElementById("cart-icon");
  cartIcon.textContent = cartQuantity.toString();

  // Periksa jika keranjang kosong dan perbarui ikon jika iya
  if (cartQuantity === 0) {
    const cartIcon = document.getElementById("cart-icon");
    cartIcon.textContent = "0";
  }
}
