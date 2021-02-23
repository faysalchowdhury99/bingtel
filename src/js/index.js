// Menu Icon Change Toggle
const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', () => {
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.add('fa-times');
        menuIcon.classList.remove('fa-bars');
    } else if (menuIcon.classList.contains('fa-times')) {
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-times');
    }
});

// Download Slider
const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    initialSlide: 1,
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 5000,
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 300,
        depth: 900,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            coverflowEffect: {
                stretch: 200,
            },
        },
        576: {
            coverflowEffect: {
                stretch: 300,
            },
        },
    },
});
