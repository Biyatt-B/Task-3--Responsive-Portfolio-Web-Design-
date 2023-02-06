document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    let headerHeight = header.offsetHeight;

    document.addEventListener("scroll", function() {
        if (window.scrollY > headerHeight) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
});