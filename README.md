# WINTOP COFFEE - Specialty Coffee Landing Page

A professional, high-performance landing page for **WINTOP COFFEE**, featuring a modern "coffee-vibe" design, smooth animations, and a seamless WhatsApp ordering system.

## Project Structure

```text
├── assets/
│   ├── css/
│   │   └── style.css       # Custom styles and pro animations
│   ├── js/
│   │   └── script.js      # Smooth scrolling, WhatsApp logic, and scroll reveals
│   └── images/
│       └── logo.jpg        # Brand logo
├── index.html              # Main landing page (Tailwind CSS)
└── README.md               # Project documentation
```

## Features

- **Professional "Coffee Vibe"**: Custom color palette (Espresso, Latte, Caramel) with grainy textures and radial gradients.
- **Advanced Animations**:
    - `steamRisePro`: Realistic steam effect for the hero image.
    - `floatBeanPro`: Smooth floating coffee bean decorations.
    - `revealOnScroll`: Elements animate into view as the user scrolls.
    - `hover-lift`: Subtle 3D lift effect for cards and buttons.
- **WhatsApp Integration**: A functional ordering form that formats customer details into a professional WhatsApp message.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop using Tailwind CSS.
- **RTL Support**: Native Arabic support with professional typography (Cairo & Tajawal).

## How to Modify

### 1. Changing Colors
The primary colors are defined in both `index.html` (Tailwind Config) and `assets/css/style.css` (CSS Variables). Update both to ensure consistency.

### 2. Updating Contact Information
- **WhatsApp Number**: Open `assets/js/script.js` and update the `whatsappNumber` variable.
- **Social Links**: Search for the footer section in `index.html` and update the `href` attributes in the social media icons.

### 3. Adding New Products
Copy one of the existing product/roast cards in `index.html` and update the text, icons, and descriptions.

## Technical Details

- **Framework**: Tailwind CSS (CDN)
- **Icons**: Font Awesome 6.4
- **Fonts**: Google Fonts (Cairo for headings, Tajawal for body)
- **Interactions**: Vanilla JavaScript

---
Developed with ❤️ for WINTOP COFFEE.
