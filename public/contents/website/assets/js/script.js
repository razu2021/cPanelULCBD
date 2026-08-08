const partnerSwiper = new Swiper('.team__partner-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,

    slidesPerView: 2,
    spaceBetween: 30,
    speed: 1200,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    coverflowEffect: {
        rotate: 35,
        stretch: 0,
        depth: 180,
        modifier: 1.2,
        slideShadows: false,
    },

    breakpoints: {
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
    }
});
// =================== testimonial slider js start her e===========
const testimonialSwiper = new Swiper('.testimonial__slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    speed: 1200,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
    }
});



// =================== hero1 slider js end here ===========
const swiper = new Swiper(".mySwiper", {
  speed: 1000,
  parallax: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: 'fade', // Smooth transition between slides
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
navigation: {
    nextEl: ".next-slide",
    prevEl: ".prev-slide",
  },
});

// =================== banner2 slider js end here ===========
const swiper2 = new Swiper(".banner_slider2", {
 speed: 1200,
  loop: true,
  parallax: true, // আধুনিক প্যারালাক্স ইফেক্ট
  autoplay: { delay: 6000, disableOnInteraction: false },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// =================== banner7 slider js end here ===========
document.addEventListener("DOMContentLoaded", function () {
    const banner7Swiper = new Swiper('.main_hero_slider', {
        // Core settings
        loop: true,
        speed: 1000,      // Slide transition speed
        parallax: true,   // Enables the data-swiper-parallax attributes
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        
        // Navigation & Pagination
        pagination: {
            el: '.banner7-pagination',
            clickable: true,
        },

        // Fast & Responsive Transitions
        grabCursor: true,
        watchSlidesProgress: true, // Performance boost for parallax
    });
});



// =================== banner4 slider js end here ===========
const swiper4 = new Swiper(".banner4-slider", {
  speed: 1400,
  parallax: true,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// =================== banner5 slider js  here ===========
const swiper5 = new Swiper(".banner5-slider", {
  speed: 1600, // Very smooth and cinematic transition
  parallax: true,
  loop: true,
  effect: 'fade', // Full-screen fade looks great without external mockups
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// =================== hero banner6 slider js end here ===========
const swiper6 = new Swiper(".banner6-slider", {
  speed: 1800,
  parallax: true,
  loop: true,
  effect: 'creative',
  creativeEffect: {
    prev: { translate: ["-100%", 0, -500], rotate: [0, 0, -20], opacity: 0 },
    next: { translate: ["100%", 0, 0], opacity: 0 },
  },
  autoplay: { delay: 7000, disableOnInteraction: false },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ========== banner 7


//---- country desctination slider script start here 
const destinationSlider = new Swiper('.destinationSlider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 0, // Cards will stay straight
        stretch: 80, // Space between cards
        depth: 200, // 3D perspective
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


//============== partner slider js start here partner slider 2
document.addEventListener('DOMContentLoaded', function () {
    // --- 1. Swiper Infinity Loop (Marquee) Configuration ---
    const partnerSwiper = new Swiper('.partnerSlider', {
        slidesPerView: 2, // Default mobile
        spaceBetween: 25,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 0, // No delay for seamless loop
            disableOnInteraction: false,
        },
        speed: 5000, // Movement speed for one slide
        allowTouchMove: false, // Prevents manual swipe, keeps flow smooth
        freeMode: true, // Required for linear autoplay

        // Fluid Scaling based on screen size
        breakpoints: {
            576: { slidesPerView: 3, spaceBetween: 30 },
            992: { slidesPerView: 4, spaceBetween: 35 },
            1200: { slidesPerView: 5, spaceBetween: 40 },
        },
    });

    // --- 2. Dynamic 3D Perspective Tilt on Hover ---
    const cards = document.querySelectorAll('.t-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top; // y position within the element.

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Define tilt range (the lower the number, the subtler the tilt)
            const rotateX = ((y - centerY) / centerY) * -15; // Rotate around X
            const rotateY = ((x - centerX) / centerX) * 15; // Rotate around Y

            this.style.transform = `translateY(-1rem) scale(1.03) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        // Reset transform on mouse leave
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
        });
    });
});

// ========== partner slider js end here partner slider 3
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.partnerSwiper', {
        effect: 'coverflow', // Graphical 3D effect
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        coverflowEffect: {
            rotate: 30,      // Card gulo 30 degree angle-e thakbe
            stretch: 0,
            depth: 100,      // Distance/Depth feeling
            modifier: 1,
            slideShadows: false, // Clean look-er jonno shadow false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
        }
    });
});









/**
 * =====================================================
 *  image gallery script start here
 * ======================================================
 */

Fancybox.bind("[data-fancybox='gallery']", {
  Toolbar: false,
  animated: true,
  showClass: "fancybox-fadeIn",
});
/**
 * =====================================================
 *  Faq section script start here 
 * ======================================================
 */

document.querySelectorAll('.faq__question').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;

    parent.classList.toggle('active');
  });
});

//---------------- Faq section script end here ---------------
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
});


//==========================================
// service card section script start here
//==========================================
document.addEventListener('DOMContentLoaded', function () {
    const serviceSwiper = new Swiper('.serviceSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
        },
        // Adds smooth transition feel
        speed: 1000,
    });
});



//====================== promot5 slider script 
const promot5Slider = new Swiper('.promot5-slider', {
    // Basic Settings
    loop: true,
    speed: 1200, // Ektu slow and smooth transition
    allowTouchMove: true, // Mobile-e swipe kora jabe
    parallax: true, // Elements gulo ektu alada speed-e move korbe (Premium feel)
    
    // Autoplay logic with pause on hover
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // User hover korle slider thambe
    },

    // Premium Fade Effect
    effect: 'fade',
    fadeEffect: {
        crossFade: true // Ekta slide jawar somoy arekta reveal hobe seamlessly
    },

    // Advanced Pagination (Bullet custom style)
    pagination: {
        el: '.promot5-pagination',
        clickable: true,
        dynamicBullets: false, // Bullet size fixed thakbe
    },

    // slide change hobar somoy text animation trigger hobe
    on: {
        init: function () {
            // Initial slide-er content reveal hobe
            animateSliderContent(this);
        },
        slideChangeTransitionStart: function () {
            // Slide change shuru holei puron content hide hobe
            resetSliderContent();
        },
        slideChangeTransitionEnd: function () {
            // New slide-er content reveal hobe (Fade-in-up style)
            animateSliderContent(this);
        }
    }
});

// Animation Helper Functions
function animateSliderContent(swiper) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    
    // Content elements dhora (Badge, Title, Desc, Button)
    const elements = activeSlide.querySelectorAll('.promot5-badge, .promot5-title, .promot5-desc, .promot5-actions, .promot5-visual-wrap');
    
    elements.forEach((el, index) => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.style.transition = `all 0.6s ease ${0.2 + (index * 0.1)}s`; // Staggered delay logic
    });
}

function resetSliderContent() {
    const allElements = document.querySelectorAll('.promot5-badge, .promot5-title, .promot5-desc, .promot5-actions, .promot5-visual-wrap');
    
    allElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)'; // Niche theke upore uthbar effect
        el.style.transition = 'none'; // Reset-er somoy transition hobe na
    });
}











/**
 * ====================== 
 * back  to top script 
 * ====================
 */
document.addEventListener("DOMContentLoaded", function() {
    const progressPath = document.querySelector('.progress-wrap path');
    const pathLength = progressPath.getTotalLength();

    // শুরুর সেটআপ
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    // স্ক্রল অনুযায়ী প্রোগ্রেস আপডেট
    const updateProgress = () => {
        const scroll = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;

        // বাটন দেখানো বা লুকানো
        if (scroll > 300) {
            document.querySelector('.progress-wrap').classList.add('active-progress');
        } else {
            document.querySelector('.progress-wrap').classList.remove('active-progress');
        }
    };

    window.addEventListener('scroll', updateProgress);

    // ক্লিক করলে স্মুথ স্ক্রল করে উপরে যাওয়া
    document.querySelector('.progress-wrap').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});




