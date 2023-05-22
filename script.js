// Menu for mobile
function copyMenu() {
  let dptCataegory = document.querySelector(".dpt-cat");
  let dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCataegory.innerHTML;

  let mainNav = document.querySelector(".header-nav nav");
  let newPlace = document.querySelector(".off-canvas nav");
  newPlace.innerHTML = mainNav.innerHTML;

  let topNav = document.querySelector(".header-top .wrapper");
  let topPlace = document.querySelector(".thetop-nav ");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

const menuButton = document.querySelector(".trigger"),
  closeButton = document.querySelector(".t-close"),
  addclass = document.querySelector(".site");
menuButton.addEventListener("click", function () {
  addclass.classList.add("showmenu");
});
closeButton.addEventListener("click", function () {
  addclass.classList.remove("showmenu");
});

const submenu = document.querySelectorAll(".has-child .drop-down");
const up_arrow = document.querySelectorAll(".fa-chevron-right");
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  // e.preventDefault();
  submenu.forEach((item) => {
    if (item != this) {
      item.closest(".has-child").classList.remove("expand");
      item.lastElementChild?.children[0]?.classList.remove(
        "up-arrow"
      );
      if (item.firstElementChild?.classList.contains("fa-solid")) {
        item.firstElementChild?.classList.remove("up-arrow");
      }
    } else {
      null;
    }
  });
  
  if (this.closest(".has-child").classList != "expand") {
    this.closest(".has-child").classList.toggle("expand");
    // console.log(this)
    this.lastElementChild?.children[0]?.classList.toggle("up-arrow");
    if (this.firstElementChild?.classList.contains("fa-solid")) {
      this.firstElementChild?.classList.toggle("up-arrow");
    }
  }
}

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

const searchButton = document.querySelector(".t-search");
tClose = document.querySelector(".search-close");
searchButton.addEventListener("click", function () {
  addclass.classList.toggle("showsearch");
});
tClose.addEventListener("click", function () {
  addclass.classList.remove("showsearch");
});

const dptButton = document.querySelector(".dpt-cat .dpt-trigger");
dptButton.addEventListener("click", function () {
  addclass.classList.toggle("showdpt");
});
const productThumb = new Swiper(".small-image", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    461: {
      spaceBetween: 32,
    },
  },
});
const productBig = new Swiper(".big-image", {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productThumb,
  },
});

let stocks = document.querySelectorAll(".products .stock")
for(let x = 0; x < stocks.length; x++){
  let stock = stocks[x].dataset.stock,
  available = stocks[x].querySelector(".qty-available").innerHTML,
  sold = stocks[x].querySelector(".qty-sold").innerHTML,
  percent = sold*100/stock;
  stocks[x].querySelector(".available").style.width = percent + '%';
}

const divtoShow = '.mini-cart'
const divPopup = document.querySelector(divtoShow)
const divTrigger = document.querySelector('.cart-trigger')

divTrigger.addEventListener('click', () => {
  setTimeout(() => {
    if(!divPopup.classList.contains('show')){
      divPopup.classList.add('show')
    }
}, 250)
})

document.addEventListener('click', (e) => {
const isClosest = e.target.closest(divtoShow)
if(!isClosest && divPopup.classList.contains('show')){
    divPopup.classList.remove('show')
  }
})
