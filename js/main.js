//faq toggle Effect
$(".togglefaq").click(function (e) {
    e.preventDefault();
    var notthis = $(".active").not(this);
    notthis.toggleClass("active").next(".faqanswer").slideToggle(300);
    $(this).toggleClass("active").next().slideToggle("fast");
});

// Toggle Effect
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("change");
        $(".header").toggleClass("nav-active");
    });
});

$(document).ready(function () {
    $(".nav__menu li a").click(function () {
        $(".header").removeClass("nav-active");
        $(".navbar-toggler").removeClass("change");
    });
});

// Navbar Sticky Scroll
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var headerScroll = document.getElementById("headerScroll");

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        headerScroll.classList.add("show");
    } else {
        headerScroll.classList.remove("show");
    }
}
