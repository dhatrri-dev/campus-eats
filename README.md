# Campus Eats – College Canteen Ordering

A food ordering website for the Gate 2 Canteen. Students can browse the menu, add items to their cart, and place a pickup order online.

---

## 👥 Team Members

| Name | Page |
|------|------|
| Dhatrri Nagapatla | Home Page, Menu Page |
| Laxmi Harika | Cart Page, Order Page |

---

## 📁 Pages

### `index.html` — Home Page
- Hero section with a sample order token
- "How It Works" — 3-step walkthrough
- Today's Highlights — 3 featured menu items (Masala Dosa, Veg Thali, Cold Coffee)
- Canteen Serving Hours table

| Meal | Timing |
|------|--------|
| Breakfast | 7:30 AM – 9:30 AM |
| Lunch | 12:00 PM – 2:30 PM |
| Snacks | 4:00 PM – 6:30 PM |
| Dinner | 7:00 PM – 9:30 PM |

### `menu.html` — Menu Page
- 26 items across 5 categories
- Category filter buttons (All, Breakfast, Meals, Snacks, Beverages, Desserts)
- Search form
- "Add to Cart" button on each item with `data-item` and `data-price` attributes

| Category | Items |
|----------|-------|
| Breakfast (5) | Masala Dosa ₹60, Idli Sambar ₹40, Poha ₹35, Upma ₹35, Onion Uttapam ₹55 |
| Meals (6) | Veg Thali ₹90, Veg Biryani ₹85, Curd Rice ₹50, Chapati with Curry ₹55, Rajma Chawal ₹70, Lemon Rice ₹45 |
| Snacks (6) | Samosa ₹25, Grilled Veg Sandwich ₹45, Veg Maggi ₹40, Pav Bhaji ₹55, Aloo Tikki ₹30, Vada Pav ₹25 |
| Beverages (5) | Cold Coffee ₹40, Masala Chai ₹15, Fresh Lime Soda ₹30, Badam Milk ₹35, Filter Coffee ₹20 |
| Desserts (4) | Gulab Jamun ₹30, Brownie with Ice Cream ₹65, Fruit Custard ₹40, Kesari Bath ₹35 |

### `cart.html` — Cart Page *(shell)*
- Navigation and basic layout in place
- "Proceed to Order" button

### `order.html` — Order Page *(shell)*
- Form with Name, Phone Number, and Delivery Location fields
- "Place Order" submit button

---

## 📁 Project Structure

```
campus-eats/
├── index.html
├── menu.html
├── cart.html
├── order.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── logo.svg
└── README.md
```

---

## 🚀 How to Run

Open `index.html` in any modern browser — no build step required.

```bash
# Or serve locally with Python
python -m http.server 8080
```

---

*© 2026 Campus Eats — Gate 2 Canteen*