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

function getActiveCategory() {
  const activeBtn = document.querySelector('.filter-btn[aria-pressed="true"]');
  return activeBtn ? activeBtn.dataset.category : 'all';
}

function filterMenuItems() {
  const searchInput = document.querySelector('#menuSearch');
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const activeCategory = getActiveCategory();
  const menuItems = document.querySelectorAll('.menu-item');
  let visibleCount = 0;

  menuItems.forEach(function (item) {
    const name = item.querySelector('h3').textContent.toLowerCase();
    const desc = item.querySelector('p').textContent.toLowerCase();
    const matchesSearch = name.includes(query) || desc.includes(query);
    const matchesCategory = activeCategory === 'all' || item.dataset.category === activeCategory;

    if (matchesSearch && matchesCategory) {
      item.classList.remove('hidden');
      visibleCount += 1;
    } else {
      item.classList.add('hidden');
    }
  });

  toggleNoResultsMessage(visibleCount);
  return visibleCount;
}

function toggleNoResultsMessage(visibleCount) {
  let message = document.querySelector('#no-results-message');

  if (!message) {
    message = document.createElement('p');
    message.id = 'no-results-message';
    message.textContent = 'No dishes match your search.';
    message.classList.add('hidden');
    const grid = document.querySelector('.item-grid');
    if (grid) grid.insertAdjacentElement('afterend', message);
  }

  if (visibleCount === 0) {
    message.classList.remove('hidden');
  } else {
    message.classList.add('hidden');
  }
}

function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (filterButtons.length === 0) return;

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      filterButtons.forEach(function (btn) {
        btn.setAttribute('aria-pressed', 'false');
      });
      button.setAttribute('aria-pressed', 'true');
      filterMenuItems();
    });
  });
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
  initCategoryFilters();
});