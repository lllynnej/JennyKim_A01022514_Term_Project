document.addEventListener('DOMContentLoaded', function () {
    // Initialize the Slick slider with dots enabled
    $('.slider').slick({
        dots: true,             // Enable dots
        infinite: true,         // Enable infinite scroll
        speed: 500,             // Transition speed
        slidesToShow: 1,        // Show one slide at a time
        slidesToScroll: 1,      // Scroll one slide at a time
        autoplay: true,         // Enable autoplay
        autoplaySpeed: 2000,    // Autoplay speed
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileLinks = document.querySelector('.mobile-links');

    hamburger.addEventListener('click', () => {
        mobileLinks.classList.toggle('active');
    });

    // Reset menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mobileLinks.classList.remove('active');
        }
    });

    // Close menu when a link is clicked
    const menuItems = mobileLinks.querySelectorAll('a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileLinks.classList.remove('active');
        });
    });

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,   // Animation duration
        easing: 'ease-in-out', // Easing function
        once: true,        // Animation will only happen once when scrolling into view
    });

    // Initialize jQuery Validation for the form
    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Name should be at least 3 characters"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            message: {
                required: "Please enter a message",
                minlength: "Message should be at least 10 characters"
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});
