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





