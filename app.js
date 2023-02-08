
function openCategoryPage(category) {
    window.location.href = `category.html?category=${category}`;
}
const dateToday = new Date();
document.getElementById("get-current-year").innerHTML=dateToday.getFullYear()
$(document).ready(function () {
    $("#partners-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [650, 1],
        pagination: false,
        navigation: false,
        slideSpeed: 100,
        autoPlay: true
    });
});
function openProductPage(productId) {

    window.location.href = `product.html?productId=${productId}`;
  }