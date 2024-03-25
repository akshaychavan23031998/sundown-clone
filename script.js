const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function featuredProducts() {
    var elem_container =  document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");

    elem_container.addEventListener("mouseenter", function() {
        fixed.style.display = "block";
    });

    elem_container.addEventListener("mouseleave", function() {
        fixed.style.display = "none";
    });

    // Select all elements with class name "elem"
    var elems = document.querySelectorAll(".elem");
    // Iterate over each element and attach event listener
    elems.forEach(function(e) {
        e.addEventListener("mouseenter", function() {
            // Get the data-image attribute value of the current element
            var image = e.getAttribute("data-image");
            // Change the background image of the fixed element
            fixed.style.backgroundImage = `url(${image})`;
        });
    });
}

function swiper() {
    var spaceBetweenValue = window.innerWidth < 600 ? 20 : 100; // Check screen width
    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: spaceBetweenValue, // Use the dynamically determined spaceBetween value
    });
}

swiper(); // Call the function initially
// Optionally, we might want to update the spacing dynamically when the window is resized
window.addEventListener('resize', function() {
    swiper(); // Call swiper function again on window resize
});

function menu() {
    var menu = document.querySelector("nav h3");
    var icon = document.querySelector("nav h3 i");
    var full = document.querySelector("#full-scr");
    var img = document.querySelector("nav img");
    var flag = 0;
    menu.addEventListener("click", function() {
        if(flag == 0){
            full.style.top = 0;
            img.style.opacity = 0;
            icon.className = "ri-close-line";
            flag = 1;
        }
        else {
            full.style.top = "-100%";
            img.style.opacity = 1;
            icon.className = "ri-menu-line";
            flag = 0;
        }
    })
}

function load() {
    var loader = document.querySelector("#loader");
    setTimeout(function() {
        // console.log("Akshay");
        loader.style.top = "-100%"
    },4200)
}

featuredProducts();
menu();
load();


