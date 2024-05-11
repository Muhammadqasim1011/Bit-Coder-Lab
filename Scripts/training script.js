document.addEventListener("DOMContentLoaded", function() {
    const caroselContainer = document.querySelector(".carosel-container");
    const caroselItems = document.querySelectorAll(".carosel-item");
    const totalItems = caroselItems.length;
    let currentItem = 0;

    function showItem(index) {
        caroselItems.forEach((item, i) => {
            if (i === index) {
                item.style.display = "grid";
            } else {
                item.style.display = "none";
            }
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

    // Show the first item initially
    showItem(currentItem);

    // Add event listeners for left and right arrows
    document.querySelector(".bx-chevron-left").addEventListener("click", prevItem);
    document.querySelector(".bx-chevron-right").addEventListener("click", nextItem);
});
