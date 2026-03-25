github repository url: https://github.com/niraj-1601/shoppy-globe

# ShoppyGlobe

ShoppyGlobe is a **React-based e-commerce web application** built as an academic project.  
It simulates a shopping experience similar to Flipkart or Amazon, with product listing, details, cart, and checkout functionality.

## Features

- Display products fetched from API: `https://dummyjson.com/products`  
- View detailed information for each product with multiple images  
- Add, remove, and adjust quantity of products in cart (Redux state)  
- Search products using Redux  
- Checkout page with dummy form and order placement  
- 404 Not Found page for invalid routes  
- Lazy loading for components and images for performance  
- Responsive UI for desktop and mobile  

## Components

- **App** – main component handling routing  
- **Header** – navigation and cart icon  
- **ProductList** – displays product cards  
- **ProductItem** – single product card with Add to Cart  
- **ProductDetail** – detailed product page  
- **Cart** – displays cart items and allows quantity adjustments  
- **CartItem** – single item in cart  
- **Checkout** – dummy checkout form with order placement  
- **NotFound** – 404 page  

## Tech Stack

- React 18 + Vite  
- Redux Toolkit for state management  
- React Router v6 for routing  
- CSS for styling and responsiveness  

## Project Setup

1. Clone the repo:  
   ```bash
   git clone https://github.com/Niraj1601/shoppyglobe.git
