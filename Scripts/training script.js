document.addEventListener("DOMContentLoaded", function() {
    const caroselContainer = document.querySelector(".carosel-container");
    const caroselItems = document.querySelectorAll(".carosel-item");
    const totalItems = caroselItems.length;
    let currentItem = 0;
    let startX = 0;
    let startY = 0;


    
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

    // Show the first item initially
    showItem(currentItem);

    // Add event listeners for left and right arrows
    document.querySelector(".bx-chevron-left").addEventListener("click", prevItem);
    document.querySelector(".bx-chevron-right").addEventListener("click", nextItem);

    // Add event listeners for swipe on touch devices
    caroselContainer.addEventListener("touchstart", handleSwipeStart);
    caroselContainer.addEventListener("mousedown", handleSwipeStart);

    caroselContainer.addEventListener("touchend", handleSwipeEnd);
    caroselContainer.addEventListener("mouseup", handleSwipeEnd);

    // Add event listener for keyboard arrow keys
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft") {
            prevItem();
        } else if (event.key === "ArrowRight") {
            nextItem();
        }
    });
});