const categoryBtn = document.getElementById("categoryBtn");
const categories = document.getElementById("categories");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenuContainer = document.getElementById("mobileMenuContainer");
const menuCloseBtn = document.getElementById("menuCloseBtn");
const mobileMenu = document.getElementById("mobileMenu");
const homeListBtn = document.getElementById("homeListBtn");
const categoryListBtn = document.getElementById("categoryListBtn");
const homeList = document.getElementById("homeList");
const categoryList = document.getElementById("categoryList");
const shopItemContainer = document.getElementById("shopItemContainer");
const expandBtn = document.getElementById("expandBtn");
const icon = document.getElementById("icon");

//handle category and home toggle in mobile menu
function handleToggle(btn1, btn2, list1, list2) {
  btn2.classList.remove("bg-lightOrange", "text-primary");
  btn1.classList.add("bg-lightOrange", "text-primary");
  list2.classList.add("hidden");
  list1.classList.remove("hidden");
}

categoryListBtn.addEventListener("click", () => {
  handleToggle(categoryListBtn, homeListBtn, categoryList, homeList);
  homeListBtn.classList.add("bg-[#F2F3F4]", "text-darkGray");
});
homeListBtn.addEventListener("click", () =>
  handleToggle(homeListBtn, categoryListBtn, homeList, categoryList)
);

//show mobile menu on click on the menu bar
mobileMenuBtn.addEventListener("click", () => {
  if (mobileMenuContainer.classList.contains("hidden")) {
    mobileMenuContainer.classList.remove("hidden");
  }
});

// handle mobile menu show and hide in close button and click outside of the mobile menu
function handleMobileMenu(container) {
  container.classList.add("hidden");
}

menuCloseBtn.addEventListener("click", () =>
  handleMobileMenu(mobileMenuContainer)
);

mobileMenuContainer.addEventListener("click", () =>
  handleMobileMenu(mobileMenuContainer)
);

// stop hide the menu if click is inside the menu
function stopClickInside(e) {
  e.stopPropagation();
}
mobileMenu.addEventListener("click", (e) => stopClickInside(e));

// handle show and hide categories in big screen
categoryBtn.addEventListener("click", () => {
  categories.classList.toggle("hidden");
});

// show and hide items in mobile menu on click on the arrow icon
let isExpend = true;
function toggleContainerSize() {
  let size = isExpend ? 600 : 40;
  shopItemContainer.style.height = size + "px";
  expandBtn.classList.toggle("active-btn");
  isExpend = !isExpend;
}

expandBtn.addEventListener("click", toggleContainerSize);

var swiper = new Swiper(".categoryCardSlider", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
  },
});

var swiper2 = new Swiper(".bestSellsSlider", {
  slidesPerView: 1,
  spaceBetween: 5,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
  },
});
