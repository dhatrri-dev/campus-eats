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
function addItemToCart(name, price) {
  const cartItems = getCart();
  const existingItem = cartItems.find(function (item) {
    return item.name === name;
  });

  /* ---------- Cart page rendering (Cart page only) ---------- */

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function computeItemsTotal(cartItems) {
  let total = 0;
  cartItems.forEach(function (item) {
    total += item.price * item.quantity;
  });
  return total;
}

function updateCartSummaryDisplay(itemsTotal) {
  const itemsTotalEl = document.querySelector('#itemsTotal');
  const packingChargeEl = document.querySelector('#packingCharge');
  const grandTotalEl = document.querySelector('#grandTotal');

  if (!itemsTotalEl || !packingChargeEl || !grandTotalEl) return;

  const packingCharge = itemsTotal > 0 ? 5 : 0;
  const grandTotal = itemsTotal + packingCharge;

  itemsTotalEl.textContent = '₹' + itemsTotal;
  packingChargeEl.textContent = '₹' + packingCharge;
  grandTotalEl.textContent = '₹' + grandTotal;
}

function updateCartItemQuantity(name, quantity) {
  const cartItems = getCart();
  const item = cartItems.find(function (i) { return i.name === name; });
  if (item) item.quantity = quantity;
  saveCart(cartItems);
}

function removeCartItem(name) {
  let cartItems = getCart();
  cartItems = cartItems.filter(function (i) { return i.name !== name; });
  saveCart(cartItems);
}

function attachCartRowListeners() {
  const qtyInputs = document.querySelectorAll('.cart-qty-input');
  qtyInputs.forEach(function (input) {
    input.addEventListener('change', function () {
      const itemName = input.dataset.item;
      const newQty = Math.max(1, Number(input.value) || 1);
      updateCartItemQuantity(itemName, newQty);
      renderCartPage();
      updateCartCountDisplay();
    });
  });

  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      removeCartItem(button.dataset.item);
      renderCartPage();
      updateCartCountDisplay();
    });
  });
}

function renderCartPage() {
  const cartTableBody = document.querySelector('#cartTableBody');
  const cartTable = document.querySelector('#cartTable');
  const emptyMessage = document.querySelector('#emptyCartMessage');

  if (!cartTableBody) return;

  const cartItems = getCart();
  cartTableBody.innerHTML = '';

  if (cartItems.length === 0) {
    if (cartTable) cartTable.hidden = true;
    if (emptyMessage) emptyMessage.hidden = false;
    updateCartSummaryDisplay(0);
    return;
  }

  if (cartTable) cartTable.hidden = false;
  if (emptyMessage) emptyMessage.hidden = true;

  cartItems.forEach(function (item) {
    const subtotal = item.price * item.quantity;
    const slug = slugify(item.name);
    const row = document.createElement('tr');
    row.classList.add('cart-row');
    row.dataset.item = item.name;

    row.innerHTML =
      '<td data-label="Item">' + item.name + '</td>' +
      '<td data-label="Price" class="price">₹' + item.price + '</td>' +
      '<td data-label="Quantity">' +
        '<label for="qty-' + slug + '" class="visually-hidden">Quantity for ' + item.name + '</label>' +
        '<input type="number" id="qty-' + slug + '" min="1" value="' + item.quantity + '" data-item="' + item.name + '" class="cart-qty-input">' +
      '</td>' +
      '<td data-label="Subtotal" class="subtotal price">₹' + subtotal + '</td>' +
      '<td data-label="Remove"><button type="button" class="remove-btn" data-item="' + item.name + '">Remove</button></td>';

    cartTableBody.appendChild(row);
  });

  updateCartSummaryDisplay(computeItemsTotal(cartItems));
  attachCartRowListeners();
}

/* ---------- Order review rendering (Order page only) ---------- */

function renderOrderReview() {
  const reviewList = document.querySelector('#orderReviewList');
  const grandTotalEl = document.querySelector('#orderGrandTotal');

  if (!reviewList || !grandTotalEl) return;

  const cartItems = getCart();
  reviewList.innerHTML = '';

  if (cartItems.length === 0) {
    const emptyLi = document.createElement('li');
    emptyLi.textContent = 'Your cart is empty.';
    reviewList.appendChild(emptyLi);
    grandTotalEl.textContent = '₹0';
    return;
  }

  let itemsTotal = 0;

  cartItems.forEach(function (item) {
    const subtotal = item.price * item.quantity;
    itemsTotal += subtotal;

    const li = document.createElement('li');
    li.innerHTML = '<span>' + item.quantity + ' × ' + item.name + '</span><span class="token-code">₹' + subtotal + '</span>';
    reviewList.appendChild(li);
  });

  const packingCharge = 5;
  const grandTotal = itemsTotal + packingCharge;

  const packingLi = document.createElement('li');
  packingLi.innerHTML = '<span>Packing charge</span><span class="token-code">₹' + packingCharge + '</span>';
  reviewList.appendChild(packingLi);

  grandTotalEl.textContent = '₹' + grandTotal;
}

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ name: name, price: price, quantity: 1 });
  }

  saveCart(cartItems);
  updateCartCountDisplay();
}

/* ---------- Order form validation (Order page only) ---------- */

function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function isValidPhone(phone) {
  const pattern = /^[0-9]{10}$/;
  return pattern.test(phone);
}

function showFieldError(input, message) {
  clearFieldError(input);
  const error = document.createElement('span');
  error.classList.add('field-error');
  error.style.color = '#C1442D';
  error.style.fontSize = '0.8rem';
  error.style.display = 'block';
  error.style.marginTop = '0.3rem';
  error.textContent = message;
  input.insertAdjacentElement('afterend', error);
  input.style.borderColor = '#C1442D';
}

function clearFieldError(input) {
  input.style.borderColor = '';
  const next = input.nextElementSibling;
  if (next && next.classList.contains('field-error')) {
    next.remove();
  }
}

function clearAllOrderErrors(form) {
  const errors = form.querySelectorAll('.field-error');
  errors.forEach(function (e) { e.remove(); });
  const fields = form.querySelectorAll('input, select, textarea');
  fields.forEach(function (f) { f.style.borderColor = ''; });
}

function validateOrderForm(form) {
  let isValid = true;

  const fullName = form.querySelector('#fullName');
  const registerNumber = form.querySelector('#registerNumber');
  const phone = form.querySelector('#phone');
  const email = form.querySelector('#email');
  const hostelBlock = form.querySelector('#hostelBlock');
  const pickupTime = form.querySelector('#pickupTime');
  const agreeTerms = form.querySelector('#agreeTerms');

  if (fullName.value.trim() === '') {
    showFieldError(fullName, 'Full name cannot be empty.');
    isValid = false;
  }

  if (registerNumber.value.trim() === '') {
    showFieldError(registerNumber, 'Register number cannot be empty.');
    isValid = false;
  }

  if (phone.value.trim() === '') {
    showFieldError(phone, 'Phone number cannot be empty.');
    isValid = false;
  } else if (!isValidPhone(phone.value.trim())) {
    showFieldError(phone, 'Enter a valid 10-digit phone number.');
    isValid = false;
  }

  if (email.value.trim() === '') {
    showFieldError(email, 'Email cannot be empty.');
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    showFieldError(email, 'Enter a valid email address.');
    isValid = false;
  }

  if (hostelBlock.value === '') {
    showFieldError(hostelBlock, 'Please select your block.');
    isValid = false;
  }

  if (pickupTime.value === '') {
    showFieldError(pickupTime, 'Please choose a pickup time.');
    isValid = false;
  }

  if (!agreeTerms.checked) {
    showFieldError(agreeTerms, 'Please confirm your order details.');
    isValid = false;
  }

  return isValid;
}

function initOrderForm() {
  const form = document.querySelector('#orderForm');
  const confirmation = document.querySelector('#orderConfirmation');
  const errorMsg = document.querySelector('#orderError');
  const submitBtn = document.querySelector('#submitOrderBtn');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearAllOrderErrors(form);
    if (errorMsg) errorMsg.hidden = true;
    confirmation.hidden = true;

    const isValid = validateOrderForm(form);
    if (!isValid) return;

    submitOrder(form, confirmation, errorMsg, submitBtn);
  });
}

function submitOrder(form, confirmation, errorMsg, submitBtn) {
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Placing order…';

  const orderPayload = {
    fullName: form.querySelector('#fullName').value.trim(),
    registerNumber: form.querySelector('#registerNumber').value.trim(),
    phone: form.querySelector('#phone').value.trim(),
    email: form.querySelector('#email').value.trim(),
    hostelBlock: form.querySelector('#hostelBlock').value,
    pickupTime: form.querySelector('#pickupTime').value,
    items: getCart()
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderPayload)
  })
    .then(function (response) {
      if (!response.ok) throw new Error('Server error');
      return response.json();
    })
    .then(function () {
      confirmation.hidden = false;
      form.hidden = true;
      saveCart([]);
      updateCartCountDisplay();
    })
    .catch(function () {
      if (errorMsg) errorMsg.hidden = false;
    })
    .finally(function () {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
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
/* ---------- Add to cart buttons (Menu page) ---------- */

function initAddToCartButtons() {
  const addButtons = document.querySelectorAll('.add-to-cart-btn');

  addButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const itemName = button.dataset.item;
      const itemPrice = Number(button.dataset.price);

      addItemToCart(itemName, itemPrice);

      const originalText = button.textContent;
      button.textContent = 'Added ✓';
      button.disabled = true;

      setTimeout(function () {
        button.textContent = originalText;
        button.disabled = false;
      }, 900);
    });
  });
}
/* ---------- Init on page load ---------- */


document.addEventListener('DOMContentLoaded', function () {
  updateCartCountDisplay();
  initMenuSearch();
  initCategoryFilters();
  initAddToCartButtons();
  renderCartPage();
  renderOrderReview();
   initOrderForm();
});