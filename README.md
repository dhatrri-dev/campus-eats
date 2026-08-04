# Campus Eats – College Canteen Ordering

## 📖 Project Overview

Campus Eats is a fully responsive frontend web application developed to modernize the college canteen ordering experience. The platform allows students to browse menu items, search and filter dishes, manage their shopping cart, and place pickup orders through an intuitive and interactive interface.

Throughout the project, key frontend concepts such as semantic HTML, responsive CSS design systems, DOM manipulation, Local Storage, form validation, and collaborative Git workflows were implemented to create a seamless user experience across desktop, tablet, and mobile devices.

This project was collaboratively developed during the **Zyora Frontend Internship Program**, providing hands-on experience in real-world frontend development and team-based software engineering practices.

## 👥 Team Members

| Name | Responsibility |
|------|----------------|
| Dhatrri Nagapatla | Home Page, Menu Page |
| Laxmi Harika | Cart Page, Order Page |


## 📌 Team Contributions & Learning

### 👩‍💻 Dhatrri Nagapatla

**Built**
- Home Page (index.html)
- Menu Page (menu.html)
- Homepage layout and hero section
- Menu cards, search bar and category filters
- Shared JavaScript structure
- Menu search functionality
- Category filter interactivity
- Shared cart count using Local Storage
- Active navigation highlighting
- Cart and checkout UI improvements
- Project documentation and README updates

**Learned**
- Building responsive web pages using HTML and CSS
- Creating reusable layouts with Flexbox, Grid and CSS variables
- Organizing JavaScript into reusable functions
- Using DOM manipulation for interactive user interfaces
- Working with Local Storage for persistent data
- Collaborating using Git and GitHub through feature-based commits

---

### 👩‍💻 Laxmi Harika

**Built**
- Cart Page (cart.html)
- Order Page (order.html)
- Order review section
- Checkout form
- Payment section
- Cart rendering with quantity updates
- Order form validation
- Order submission workflow
- Error handling and loading states
- Deployment and collaboration updates

**Learned**
- Creating accessible forms using HTML
- Implementing client-side form validation with JavaScript
- Managing shopping cart operations
- Handling user feedback through validation and success messages
- Collaborating with GitHub using commits, pull requests and merge workflows

---

### 🎯Key Technical Highlights 

- **HTML5** – Structured all webpages using semantic HTML elements.
- **CSS3** – Designed a responsive and consistent user interface using Flexbox, Grid, media queries, and CSS variables.
- **JavaScript (ES6)** – Implemented interactive features such as menu search, category filters, add-to-cart functionality, form validation, and DOM manipulation.
- **Local Storage** – Stored cart items and maintained cart data across page refreshes.
- **Git** – Managed version control through feature-based commits during development.
- **GitHub** – Used for collaborative development, repository management, and project deployment.

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


## 📸 Screenshots & Page Walkthrough

### 🏠 Home Page
The landing page of Campus Eats introduces users to the canteen's online ordering system. It features a striking hero section and a clear, step-by-step "How it works" guide to help new students navigate the ordering process seamlessly.

![Home 1](assets/home-1.jpeg)

![Home 2](assets/home-2.jpeg)

![Home 3](assets/home-3.jpeg)

![Home 4](assets/home-4.jpeg)

### 🍔 Menu Page
The core browsing experience. Students can view the full catalog of items, filter by categories (Breakfast, Meals, Snacks, Beverages, Desserts), and use the search bar to find specific dishes. Each item features an interactive "Add to Cart" button for quick selection.

![Menu 1](assets/menu-1.jpeg)

![Menu 2](assets/menu-2.jpeg)

![Menu 3](assets/menu-3.jpeg)

![Menu 4](assets/menu-4.jpeg)

![Menu 5](assets/menu-5.jpeg)

![Menu 6](assets/menu-6.jpeg)

### 🛒 Cart Page
A dynamic shopping cart where users can review their selected items, adjust quantities, or remove dishes. It uses a modern two-column layout on desktop to automatically calculate subtotals, packing charges, and the grand total. The cart contents persist locally so nothing is lost if the tab is closed.

![Cart 1](assets/cart-1.jpeg)

![Cart 2](assets/cart-2.jpeg)

### 📝 Order Page
The final checkout step. Users provide their contact information, select their hostel block, choose a pickup time, and decide on a payment method (Cash or UPI). The form includes robust real-time validation to ensure all necessary details are provided before submission.

![Order 1](assets/order-1.jpeg)

![Order 2](assets/order-2.jpeg)

![Order 3](assets/order-3.jpeg)

![Order 4](assets/order-4.jpeg)

### ✅ Order Confirmed (Token Generated)
Upon successful order placement, the form disappears and the user is presented with a dynamically generated, unique digital token stub. They can present this beautiful UI token at the physical canteen counter to collect their food, perfectly bridging the digital and physical experience.

![Order Confirmed 1](assets/order-confirmed-1.jpeg)

![Order Confirmed 2](assets/order-confirmed-2.jpeg)

## 📁 Project Structure

```text
campus-eats/
│
├── assets/          # Project screenshots and other assets
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