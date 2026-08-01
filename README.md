# Campus Eats – College Canteen Ordering

## 📖 Project Overview

Campus Eats is a food ordering website for a college canteen. Students can browse the menu, add food items to their cart, and place orders online.

## 👥 Team Members

| Name | Responsibility |
|------|----------------|
| Dhatrri Nagapatla | Home Page, Menu Page |
| Laxmi Harika | Cart Page, Order Page |

## ✅ Project Milestones & Implemented Features

This project was built progressively over five structured build days (Day 7 to Day 11), successfully culminating in a fully responsive, interactive, and data-driven web application:

### Day 7 & 8: Structure & Content 
- **Architecture**: Established the project skeleton, defined team responsibilities, and wired navigation between all pages.
- **Semantic HTML**: Built out the complete structure for the **Home (`index.html`)**, **Menu (`menu.html`)**, **Cart (`cart.html`)**, and **Order (`order.html`)** pages using real, context-accurate content and proper semantic tags.

### Day 9: Design System & Styling
- **Shared CSS Tokens**: Created a unified design system (`css/style.css`) utilizing CSS variables for consistent color palettes, typography (`Archivo Black`, `Work Sans`, `IBM Plex Mono`), and layout rhythms.
- **Responsive Design**: Ensured all pages adapt flawlessly to mobile, tablet, and desktop viewports, featuring cohesive hover states and polished UI components.

### Day 10: Interactivity & JavaScript
- **Dynamic DOM Manipulation**: Implemented live updates for the cart badge and interactive filtering logic for the menu categories.
- **Form Validation**: Added robust client-side validation for the checkout form, verifying required fields and formats (email, phone numbers), complete with auto-scrolling to inline error messages.

### Day 11: Live Data & Persistence
- **State Persistence**: Integrated `localStorage` so the user's cart contents and quantities survive across page reloads.
- **API Integration**: Utilized the `fetch()` API to simulate real-time order submission, effectively handling all three application states (loading, success confirmations, and error handling).

### Day 12: Deployment & Git Collaboration
- **Live Deployment**: Successfully deployed the application to GitHub Pages, making the project publicly accessible online.
- **Git Collaboration**: Managed code collaboration via branches, pull requests, and resolved merge conflicts to merge all features for the final release.


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