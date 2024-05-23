
# BIT-CODER-LAB Website Clone

A brief description of what your project is about.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup](#setup)
5. [Usage](#usage)
6. [JavaScript Functionality](#javascript-functionality)
   - [Navbar Toggle](#navbar-toggle)
   - [Sticky Header](#sticky-header)
   - [Testimonials Carousel](#testimonials-carousel)
   - [Swipeable Carousel](#swipeable-carousel)
7. [Screenshots](#screenshots)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

This project is a responsive website layout built with HTML, CSS, and JavaScript. It includes various sections such as a header, footer, hero section, services, testimonials, team, mission, training, choose, tech skills, and blog grid. The design is modern and adapts well to different screen sizes and devices.

## Features

- Responsive design
- Modern layout
- Easy to customize
- Uses CSS variables for easy theme management
- Supports various sections including services, testimonials, and team
- Interactive JavaScript functionalities

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Setup

To set up this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/Muhammadqasim1011/Bit-Coder-Lab.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Bit-Coder-Lab
   ```
3. Open `index.html` in your browser to view the website.

## Usage

This project can be used as a template for creating responsive websites. You can customize the content and styles according to your needs.

### CSS Variables

The project uses CSS variables for managing colors. You can easily update the theme colors by changing the values of these variables in the `:root` selector:

```css
:root {
    --dark-clr: #000;
    --light-clr: #fff;
    --ancent-clr: #038DCC;
    --ancent2-clr: #031923;
}
```

### Responsive Design

The layout adjusts for different screen sizes using media queries. The breakpoints are set for various screen widths to ensure the website looks good on mobile devices, tablets, and desktops.

## JavaScript Functionality

### Navbar Toggle

The navbar toggle functionality allows the navigation menu to appear and disappear when the menu icon is clicked. The menu also closes automatically when a navigation link is clicked or when the user scrolls.

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navItem = document.querySelector('.nav-item');

    function closeNavbar() {
        menuIcon.classList.remove('bx-x');
        navItem.classList.remove('active');
    }

    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('bx-x');
        navItem.classList.toggle('active');
    });

    window.addEventListener('scroll', closeNavbar);

    const navLinks = document.querySelectorAll('.nav-item li a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeNavbar);
    });
});
```

### Sticky Header

The header becomes sticky and remains at the top of the page when the user scrolls past a certain point.

```javascript
var header = document.querySelector("header");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 300) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
```

### Testimonials Carousel

The testimonials section rotates through different testimonials when the next or back buttons are clicked.

```javascript
document.addEventListener("DOMContentLoaded", function() {
    const testimonials = [
        { text: "Testimonial 1", author: "Author 1" },
        { text: "Testimonial 2", author: "Author 2" },
        // Add more testimonials as needed
    ];

    let currentIndex = 0;
    const testimonialContent = document.querySelector(".testimonail-content");
    const testimonialText = testimonialContent.querySelector("#testimonial-text");
    const testimonialAuthor = testimonialContent.querySelector("#testimonial-author");

    function updateTestimonial(index) {
        testimonialText.textContent = testimonials[index].text;
        testimonialAuthor.textContent = testimonials[index].author;
    }

    document.getElementById("next-btn").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    document.getElementById("back-btn").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    updateTestimonial(currentIndex);
});
```

### Swipeable Carousel

The carousel supports swipe gestures on touch devices, allowing users to navigate through items by swiping left or right.

```javascript
document.addEventListener("DOMContentLoaded", function() {
    const caroselContainer = document.querySelector(".carosel-container");
    const caroselItems = document.querySelectorAll(".carosel-item");
    const totalItems = caroselItems.length;
    let currentItem = 0;
    let startX = 0;
    let startY = 0;

    function showItem(index) {
        caroselItems.forEach((item, i) => {
            item.style.display = i === index ? "grid" : "none";
        });
    }

    function nextItem() {
        currentItem = (currentItem + 1) % totalItems;
        showItem(currentItem);
    }

    function prevItem() {
        currentItem = (currentItem - 1 + totalItems) % totalItems;
        showItem(currentItem);
    }

    function handleSwipeStart(event) {
        startX = event.touches ? event.touches[0].clientX : event.clientX;
        startY = event.touches ? event.touches[0].clientY : event.clientY;
    }

    function handleSwipeEnd(event) {
        const endX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
        const endY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
        const diffX = endX - startX;
        const diffY = endY - startY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) {
                prevItem();
            } else {
                nextItem();
            }
        }
    }

    showItem(currentItem);

    document.querySelector(".bx-chevron-left").addEventListener("click", prevItem);
    document.querySelector(".bx-chevron-right").addEventListener("click", nextItem);

    caroselContainer.addEventListener("touchstart", handleSwipeStart);
    caroselContainer.addEventListener("mousedown", handleSwipeStart);

    caroselContainer.addEventListener("touchend", handleSwipeEnd);
    caroselContainer.addEventListener("mouseup", handleSwipeEnd);

    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft") {
            prevItem();
        } else if (event.key === "ArrowRight") {
            nextItem();
        }
    });
});
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or additions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```