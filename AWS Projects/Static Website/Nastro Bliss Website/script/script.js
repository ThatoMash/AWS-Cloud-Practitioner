// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Menu tab functionality
function showCategory(category) {
    // Hide all categories
    const categories = document.querySelectorAll('.menu-category');
    categories.forEach(cat => cat.style.display = 'none');

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show selected category
    document.getElementById(category).style.display = 'block';

    // Add active class to clicked button
    event.target.classList.add('active');
}

// Handle form submissions
document.addEventListener('DOMContentLoaded', function() {
    // Booking form
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.onsubmit = function() {
            alert('Table booked! You will receive a confirmation soon.');
            return true;
        };
    }

    // Order form
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.onsubmit = function() {
            alert('Order sent! You will receive a confirmation soon.');
            return true;
        };
    }

    // Show menu categories on page load for order page
    const mealsCategory = document.getElementById('meals');
    const drinksCategory = document.getElementById('drinks');
    const dessertsCategory = document.getElementById('desserts');
    if (mealsCategory) mealsCategory.style.display = 'block';
    if (drinksCategory) drinksCategory.style.display = 'block';
    if (dessertsCategory) dessertsCategory.style.display = 'block';

    // Menu item image click to show description
    const menuImages = document.querySelectorAll('.menu-item img');
    menuImages.forEach(img => {
        img.addEventListener('click', function() {
            const menuItem = this.parentElement;
            const description = menuItem.querySelector('p:not(.price)');
            if (description) {
                alert(description.textContent);
            }
        });
    });
});
