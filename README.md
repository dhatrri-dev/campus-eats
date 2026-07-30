# Campus Eats – College Canteen Ordering

## 📖 Project Overview

Campus Eats is a food ordering website for a college canteen. Students can browse the menu, add food items to their cart, and place orders online.

## 👥 Team Members

| Name | Responsibility |
|------|----------------|
| Dhatrri Nagapatla | Home Page, Menu Page |
| Laxmi Harika | Cart Page, Order Page |

## ✅ Implemented Features (Current Version)

The current version focuses on the structural HTML implementation of the web pages:
- **Home Page (`index.html`)**: Basic HTML structure, hero section, and "How it Works" guide.
- **Menu Page (`menu.html`)**: HTML structure with hardcoded menu items and categories.
- **Shopping Cart (`cart.html`)**: HTML mockup of the cart interface and order summary.
- **Order Form (`order.html`)**: HTML structure for the checkout and pickup details.
- **Styling and Responsive Design (`css/style.css`)**: Cohesive canteen-themed design system, custom typography, color palette, and responsive layouts.
- **Category Filters (JavaScript)**: Menu items can be filtered by category (Breakfast, Meals, Snacks, Beverages, Desserts).
- **Local Storage Integration for Cart State (JavaScript)**: Cart contents persist across page reloads using localStorage.
- **Dynamic Cart Count Updates (JavaScript)**: Cart badge in the navigation updates live as items are added or removed.
- **Client-side Form Validation (JavaScript)**: Order form validates empty fields, email format, and phone number format, with inline error messages and a success state.



## ✨ Upcoming / Planned Features (Pending CSS & JS)

- Styling and Responsive Design (`style.css`)
- Category Filters (JavaScript)
- Local Storage Integration for Cart State (JavaScript)
- Dynamic Cart Count Updates (JavaScript)
- Client-side Form Validation (JavaScript)
- Order confirmation persistence (view past orders)
- Accessibility audit pass (focus states, ARIA refinements)
- Deployment (GitHub Pages)

## 📁 Project Structure

```text
campus-eats/
│
├── index.html       # Home Page
├── menu.html        # Menu Page — search, filters, add-to-cart
├── cart.html        # Cart Page — dynamic cart rendering
├── order.html       # Order Page — order review + validated form
│
├── css/
│   └── style.css    # Shared design system and responsive layout rules
│
├── js/
│   └── script.js    # Shared JavaScript — cart logic, search/filters, form validation
│
├── images/          # Image assets folder
│   └── logo.png     # Logo image
│
└── README.md        # Project documentation
```