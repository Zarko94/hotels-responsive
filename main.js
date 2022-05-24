const roomBtnRight = document.getElementById("room-btn-right");
const roomBtnLeft = document.getElementById("room-btn-left");
const tstmBtnRight = document.getElementById("tstm-btn-right");
const tstmBtnLeft = document.getElementById("tstm-btn-left");
const blogBtnRight = document.getElementById("blog-btn-right");
const blogBtnLeft = document.getElementById("blog-btn-left");

const cards = document.querySelectorAll(".rooms-card-container");
const tstmBgCards = document.querySelectorAll(".tstm-bakground-cards");
const blogCards = document.querySelectorAll(".blog-card-container");

const decrementAdoultsBtn = document.getElementById("adults-decrement");
const incrementAdoultsBtn = document.getElementById("adults-increment");
const numberOfAdults = document.querySelector("#adults span");

const decrementChildrenBtn = document.getElementById("children-decrement");
const incrementChildrenBtn = document.getElementById("children-increment");
const numberOfChildren = document.querySelector("#children span");

let roomCardActive = "room-card-active";
let tstmCardActive = "tstm-active-card";
let blogCardActive = "blog-card-active";

const mobileMenuBtn = document.querySelector("#mobile-menu");

// increment decrement
let adultsValue = 0;
let childrenValue = 0;

const increment = (e, innerTxt) => {
  e.preventDefault();

  if (e.target.id == "adults-increment") {
    console.log(adultsValue);
    if (adultsValue == 10) {
      return;
    }
    adultsValue++;
    innerTxt.innerText = adultsValue;
  } else if (e.target.id == "children-increment") {
    if (childrenValue == 10) {
      return;
    }
    childrenValue++;
    innerTxt.innerText = childrenValue;
  }
};
const decrement = (e, innerTxt) => {
  e.preventDefault();

  if (e.target.id == "adults-decrement") {
    if (adultsValue == 0) {
      return;
    }
    adultsValue--;
    innerTxt.innerText = adultsValue;
  } else if (e.target.id == "children-decrement") {
    if (childrenValue == 0) {
      return;
    }
    childrenValue--;
    innerTxt.innerText = childrenValue;
  }
};

incrementAdoultsBtn.addEventListener("click", (e) => {
  console.log(e);
  increment(event, numberOfAdults);
});
decrementAdoultsBtn.addEventListener("click", () => {
  decrement(event, numberOfAdults);
});

incrementChildrenBtn.addEventListener("click", () => {
  increment(event, numberOfChildren);
});
decrementChildrenBtn.addEventListener("click", () => {
  decrement(event, numberOfChildren);
});

// sticky navbar

const nav = document.querySelector(".navigation");
const headerContainer = document.querySelector(".header-container");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 65) {
    nav.classList.add("active");
    headerContainer.classList.add("active");
  } else {
    nav.classList.remove("active");
    headerContainer.classList.remove("active");
  }
}

// responsive menu

mobileMenuBtn.addEventListener("click", () => {
  let menu = document.querySelector(".nav-items");

  if (mobileMenuBtn.innerHTML !== "X") {
    menu.style.display = "flex";
    mobileMenuBtn.innerHTML = "X";
  } else {
    menu.style.display = "none";
    mobileMenuBtn.innerHTML = `<img src="./assets/menu.png" alt="menu" />`;
  }
});

// cards slider
let cardNumber = 1;

const removeActiveClass = (element, active) => {
  element.forEach((card) => {
    card.classList.remove(active);
  });
};
const moveRight = (cardEl, active) => {
  removeActiveClass(cardEl, active);
  cardNumber++;
  if (cardNumber === cardEl.length) {
    cardNumber = 0;
  }

  cardEl[cardNumber].classList.add(active);
};

const moveLeft = (cardEl, active) => {
  removeActiveClass(cardEl, active);
  cardNumber--;
  if (cardNumber === -1) {
    cardNumber = cardEl.length - 1;
  }
  cardEl[cardNumber].classList.add(active);
};

roomBtnRight.addEventListener("click", () => {
  moveRight(cards, roomCardActive);
});

roomBtnLeft.addEventListener("click", () => {
  moveLeft(cards, roomCardActive);
});
//
// testemonials
tstmBtnRight.addEventListener("click", () => {
  moveRight(tstmBgCards, tstmCardActive);
});
tstmBtnLeft.addEventListener("click", () => {
  moveLeft(tstmBgCards, tstmCardActive);
});
// blog cards
blogBtnRight.addEventListener("click", () => {
  moveRight(blogCards, blogCardActive);
});

blogBtnLeft.addEventListener("click", () => {
  moveLeft(blogCards, blogCardActive);
});
