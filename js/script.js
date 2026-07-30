/* ============================================================
   Campus Eats — script.js
   ============================================================ */

const CART_STORAGE_KEY = 'campusEatsCart';

/* ---------- Cart helpers (shared across pages) ---------- */

function getCart() {
  const raw = localStorage.getItem(CART_STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveCart(cartItems) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
}

function getCartItemCount(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].quantity;
  }
  return total;
}

function updateCartCountDisplay() {
  const cartItems = getCart();
  const count = getCartItemCount(cartItems);
  const badges = document.querySelectorAll('#cartCount');

  badges.forEach(function (badge) {
    badge.textContent = count;
  });
}

/* ---------- Init on page load ---------- */

document.addEventListener('DOMContentLoaded', function () {
  updateCartCountDisplay();
});