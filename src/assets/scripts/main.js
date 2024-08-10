/**
 * Import dependencies from node_modules
 * see commented examples below
 */

+(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // Animate on scroll
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    // Swiper
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 1000,
    });

    // Custom Swiper Pagination
    var style = document.createElement("style");
    style.innerHTML = `
    .swiper-pagination-bullet {
      background-color: #2E2E2ECC !important;
    }
    .swiper-pagination-bullet-active {
      background-color: #2E2E2E !important;
    }
  `;
    document.head.appendChild(style);
  });
})();
