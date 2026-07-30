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
/* ---------- Menu search (Menu page only) ---------- */

function filterMenuItems() {
  const searchInput = document.querySelector('#menuSearch');
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const menuItems = document.querySelectorAll('.menu-item');
  let visibleCount = 0;

  menuItems.forEach(function (item) {
    const name = item.querySelector('h3').textContent.toLowerCase();
    const desc = item.querySelector('p').textContent.toLowerCase();
    const matchesSearch = name.includes(query) || desc.includes(query);

    if (matchesSearch) {
      item.classList.remove('hidden');
      visibleCount += 1;
    } else {
      item.classList.add('hidden');
    }
  });

  return visibleCount;
}

function initMenuSearch() {
  const searchForm = document.querySelector('#menuSearchForm');
  const searchInput = document.querySelector('#menuSearch');

  if (!searchForm || !searchInput) return;

  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    filterMenuItems();
  });

  searchInput.addEventListener('input', function () {
    filterMenuItems();
  });
}
/* ---------- Init on page load ---------- */

document.addEventListener('DOMContentLoaded', function () {
  updateCartCountDisplay();
  initMenuSearch();
});