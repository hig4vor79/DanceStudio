var swiper = new Swiper(".gallerySlider", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    600: {
      centeredSlides: false,
    },
    360: {
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 1,
    },
  },
});

var swiper = new Swiper(".reviewSlider", {
  spaceBetween: 30,
  // slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: ".nextBtn",
    prevEl: ".prewBtn",
  },
  breakpoints: {
    1444: {
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 4,
    },
    801: {
      slidesPerView: 3,
    },
    500: {
      centeredSlides: true,
      slidesPerView: 2.8,
    },
    360: {
      slidesPerView: 1.6,
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 1,
    },
  },
});

const tabItem = document.querySelectorAll(".faq__item");

gsap.to(document.querySelectorAll(".faq__content"), {
  height: 0,
  duration: 0,
});

tabItem.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.classList.toggle("active");
    if (elem.querySelector(".faq__content").clientHeight == 0) {
      gsap.to(elem.querySelector(".faq__content"), {
        height: "auto",
        duration: 0.4,
      });
    } else {
      gsap.to(elem.querySelector(".faq__content"), {
        height: 0,
        duration: 0.4,
      });
    }
  });
});

const burgerBtn = document.querySelector(".menu");
const burgerContent = document.querySelector("nav");

burgerBtn.addEventListener("click", () => {
  burgerContent.classList.toggle("active");
  burgerBtn.classList.toggle("opened");
});

const closeBurgers = document.querySelectorAll(".closeBurger");
closeBurgers.forEach((elem) => {
  elem.addEventListener("click", () => {
    burgerContent.classList.remove("active");
    burgerBtn.classList.remove("opened");
  });
});

/**
 * Modal open
 */
const overlay = document.querySelector(".popup");
const openModal = document.querySelectorAll(".openModal");
const closeModal = document.querySelectorAll(".closeModal");

openModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.add("active");
  });
});

closeModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.remove("active");
  });
});

overlay.addEventListener("click", (event) => {
  if (!document.querySelector(".popup__inner").contains(event.target)) {
    overlay.classList.remove("active");
  }
});
