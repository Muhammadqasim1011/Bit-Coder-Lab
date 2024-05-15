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

var header = document.querySelector("header");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 300) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const testimonials = [
        {
            text: "BitcoderLabs is an professional IT Company that always creates quality software for clients. If you’re looking for a team of talent developers to find out the best IT Solutions, BitcoderLabs is a company that your team should consider.",
            author: "Abbas Ali"
        },
        {
            text: "BitcoderLabs is a professional IT Company that consistently delivers top-notch software solutions. Their team of talented developers is dedicated to providing high-quality services to their clients. If you're seeking reliable IT solutions, BitcoderLabs should be at the top of your list. Their commitment to excellence is truly commendable",
            author: "Abbas Ali Shah"
        },
        {
            text: "BitcoderLabs is an professional IT Company that always creates quality software for clients. If you’re looking for a team of talent developers to find out the best IT Solutions, BitcoderLabs is a company that your team should consider.",
            author: "Zahid Chema"
        },
        {
            text: "I had the pleasure of working with BitcoderLabs, and I must say they are an exceptional IT Company. The software they developed for us exceeded our expectations in terms of quality and functionality. The team's expertise and attention to detail ensured that we received the best IT solutions tailored to our needs. BitcoderLabs is a reliable partner for any organization looking to leverage technology effectively",
            author: "Talha Anjum"
        },
        {
            text: "When it comes to IT solutions, BitcoderLabs stands out as a trusted and professional company. Their commitment to delivering top-quality software is evident in every project they undertake. Working with their team of talented developers was a pleasure, as they consistently provided innovative solutions to our business challenges. If you're searching for a reliable IT partner, BitcoderLabs is the one to choose",
            author: "William Jacks, Italy"
        }
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

    // Initialize with the first testimonial
    updateTestimonial(currentIndex);
});
;





