/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/card.mjs":
/*!********************************!*\
  !*** ./src/assets/js/card.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
class Card {
  constructor(jsonObject) {
    this.name = jsonObject.name;
    this.id = jsonObject.id;
    this.img = jsonObject.img;
    this.imgSmall = jsonObject.imgSmall;
    this.type = jsonObject.type;
    this.breed = jsonObject.breed;
    this.descriptions = jsonObject.descriptions;
    this.age = jsonObject.age;
    this.inoculations = jsonObject.inoculations;
    this.diseases = jsonObject.diseases;
    this.parasites = jsonObject.parasites;
  }

  createCard() {
    let card = document.createElement("div");
    card.className = "our-friends__item";
    card.innerHTML = "";
    card.innerHTML = ` 
                <div class="card" data-id="${this.id}">
                  <div class="card__image">
                    <img
                      src="${this.imgSmall}"
                      alt="${this.name}"
                    />
                  </div>
                  <div class="card__title">
                    <h4 class="h4_lite">${this.name}</h4>
                  </div>
                  <div class="card__button">
                    <span class="button"> Learn more </span>
                  </div>
                </div>
              `;
    return card;
  }
}


/***/ }),

/***/ "./src/assets/js/hamburger.mjs":
/*!*************************************!*\
  !*** ./src/assets/js/hamburger.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hamburger": () => (/* binding */ hamburger)
/* harmony export */ });
function hamburger() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".header__menu .menu");
  const linksMenu = document.querySelectorAll(".menu a");

  let overlay = document.querySelector(".header .overlay");

  linksMenu.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => window.location.replace(e.target.href), 500);
    });
  });

  hamburger.addEventListener("click", () => {
    if (menu.dataset.id == "closed") {
      console.log("open");
      openAll();
    } else {
      console.log("close");
      closeAll();
    }
  });

  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-menu")) {
      closeAll();
    }
  });

  overlay.addEventListener("click", () => {
    closeAll();
  });

  function openAll() {
    hamburger.style.transform = "rotate(90deg)";
    openOverlay();
    openMenu();
    document.body.style.overflow = "hidden";
    menu.dataset.id = "open";
  }
  function closeAll() {
    hamburger.style.transform = "rotate(0deg)";
    closeMenu();
    closeOverlay();
    document.body.style.overflow = "";
    menu.dataset.id = "closed";
  }

  let openMenu = () => {
    menu.style.right = "0px";
  };

  let closeMenu = () => {
    menu.style.right = "-320px";
  };
  let openOverlay = () => {
    overlay.style.display = "block";
  };
  let closeOverlay = () => {
    overlay.style.display = "none";
  };
}


/***/ }),

/***/ "./src/assets/js/modal.mjs":
/*!*********************************!*\
  !*** ./src/assets/js/modal.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popUp": () => (/* binding */ popUp),
/* harmony export */   "popUpSecond": () => (/* binding */ popUpSecond)
/* harmony export */ });
/* harmony import */ var _petsJson_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./petsJson.mjs */ "./src/assets/js/petsJson.mjs");

function popUp() {
  let modal = document.querySelector(".our-friends .modal");
  let buttonCloseModal = document.querySelector(".button-close-modal");
  let overlayPopUp = document.querySelector(".overlay-pop-up");
  let modalImage = document.querySelector(".overlay-pop-up .modal__image");
  let sliderLine = document.querySelector(
    ".our-friends .slider .slider-active"
  );
  let card = document.querySelector(".our-friends .card");

  sliderLine.addEventListener("click", (e) => {
    let cardTarget = e.target.closest(".card");
    if (cardTarget) {
      let idCard = cardTarget.dataset.id;
      openModal(_petsJson_mjs__WEBPACK_IMPORTED_MODULE_0__.arrayPets[idCard]);
    }
  });
  window.addEventListener("click", (e) => {
    let targerClassList = e.target.classList;
    if (
      targerClassList.contains("overlay-pop-up") ||
      targerClassList.contains("button-close-modal") ||
      targerClassList.contains("button-close-modal__image")
    ) {
      closeModal();
      console.log(e.target.classList);
    }
  });

  // idObject обькт из массива обектов под номеро id
  let openModal = (idObject) => {
    overlayPopUp.style.display = "block";

    loadDataForCard(idObject);
    document.body.style.overflow = "hidden";
  };
  let closeModal = () => {
    overlayPopUp.style.display = "none";
    document.body.style.overflow = "";
  };
  // let temp = arrayPets[1];
  let loadDataForCard = (object) => {
    document.querySelector(
      ".overlay-pop-up .modal__image"
    ).innerHTML = `<img src="${object.img}" alt="${object.name}">`;
    document.querySelector(
      ".overlay-pop-up .modal__name h3"
    ).textContent = `${object.name}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .type"
    ).textContent = `${object.type}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .breed"
    ).textContent = `${object.breed}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .content__description"
    ).textContent = `${object.description}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .age h5"
    ).textContent = `${object.age}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .inoculations h5"
    ).textContent = `${object.inoculations}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .diseases h5"
    ).textContent = `${object.diseases}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .parasites h5"
    ).textContent = `${object.parasites}`;
  };
  // =================
  modal.addEventListener("mouseenter", function () {
    buttonCloseModal.style.background = "transparent";
  });

  modal.addEventListener("mouseleave", function () {
    buttonCloseModal.style.background = "#f1cdb3";
  });
  buttonCloseModal.addEventListener("mouseenter", function (e) {
    buttonCloseModal.style.background = "#f1cdb3";
  });
  buttonCloseModal.addEventListener("mouseleave", function (e) {
    buttonCloseModal.style.background = "transparent";
  });
}
function popUpSecond() {
  let modal = document.querySelector(".our-friends .modal");
  let overlayPopUp = document.querySelector(".overlay-pop-up");
  let buttonCloseModal = document.querySelector(".button-close-modal");
  let sliderLine = document.querySelector(".our-friends .our-friends__row");
  let card = document.querySelector(".our-friends .card");

  sliderLine.addEventListener("click", (e) => {
    let cardTarget = e.target.closest(".card");
    if (cardTarget) {
      let idCard = cardTarget.dataset.id;
      openModal(_petsJson_mjs__WEBPACK_IMPORTED_MODULE_0__.arrayPets[idCard]);
    }
  });
  window.addEventListener("click", (e) => {
    let targerClassList = e.target.classList;
    if (
      targerClassList.contains("overlay-pop-up") ||
      targerClassList.contains("button-close-modal") ||
      targerClassList.contains("button-close-modal__image")
    ) {
      closeModal();
      console.log(e.target.classList);
    }
  });

  // idObject обькт из массива обектов под номеро id
  let openModal = (idObject) => {
    overlayPopUp.style.display = "block";

    loadDataForCard(idObject);
    document.body.style.overflow = "hidden";
  };
  let closeModal = () => {
    overlayPopUp.style.display = "none";
    document.body.style.overflow = "";
  };
  // let temp = arrayPets[1];
  let loadDataForCard = (object) => {
    document.querySelector(
      ".overlay-pop-up .modal__image"
    ).innerHTML = `<img src="${object.img}" alt="${object.name}">`;
    document.querySelector(
      ".overlay-pop-up .modal__name h3"
    ).textContent = `${object.name}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .type"
    ).textContent = `${object.type}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .breed"
    ).textContent = `${object.breed}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .content__description"
    ).textContent = `${object.description}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .age h5"
    ).textContent = `${object.age}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .inoculations h5"
    ).textContent = `${object.inoculations}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .diseases h5"
    ).textContent = `${object.diseases}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .parasites h5"
    ).textContent = `${object.parasites}`;
  };
  modal.addEventListener("mouseenter", function () {
    buttonCloseModal.style.background = "transparent";
  });

  modal.addEventListener("mouseleave", function () {
    buttonCloseModal.style.background = "#f1cdb3";
  });
  buttonCloseModal.addEventListener("mouseenter", function (e) {
    buttonCloseModal.style.background = "#f1cdb3";
  });
  buttonCloseModal.addEventListener("mouseleave", function (e) {
    buttonCloseModal.style.background = "transparent";
  });
}


/***/ }),

/***/ "./src/assets/js/petsJson.mjs":
/*!************************************!*\
  !*** ./src/assets/js/petsJson.mjs ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayPets": () => (/* binding */ arrayPets)
/* harmony export */ });
let arrayPets = [
  {
    name: "Katrine",
    id: 0,
    img: "../../assets/images/pets-upscale/katrine.png",
    imgSmall: "../../assets/pets/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Jennifer",
    id: 1,
    img: "../../assets/images/pets-upscale/jennifer.png",
    imgSmall: "../../assets/pets/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    id: 2,
    img: "../../assets/images/pets-upscale/woody.png",
    imgSmall: "../../assets/pets/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    id: 3,
    img: "../../assets/images/pets-upscale/sophia.png",
    imgSmall: "../../assets/pets/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    id: 4,
    img: "../../assets/images/pets-upscale/timmy.png",
    imgSmall: "../../assets/pets/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    id: 5,
    img: "../../assets/images/pets-upscale/charly.png",
    imgSmall: "../../assets/pets/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
  {
    name: "Scarlett",
    id: 6,
    img: "../../assets/images/pets-upscale/scarlett.png",
    imgSmall: "../../assets/pets/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },

  {
    name: "Freddie",
    id: 7,
    img: "../../assets/images/pets-upscale/freddie.png",
    imgSmall: "../../assets/pets/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/pages/main/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_js_hamburger_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/js/hamburger.mjs */ "./src/assets/js/hamburger.mjs");
/* harmony import */ var _assets_js_modal_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/js/modal.mjs */ "./src/assets/js/modal.mjs");
/* harmony import */ var _assets_js_card_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/js/card.mjs */ "./src/assets/js/card.mjs");
/* harmony import */ var _assets_js_petsJson_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/petsJson.mjs */ "./src/assets/js/petsJson.mjs");




_assets_js_hamburger_mjs__WEBPACK_IMPORTED_MODULE_0__.hamburger();

(0,_assets_js_modal_mjs__WEBPACK_IMPORTED_MODULE_1__.popUp)();
let cntCards = 3;
const initialArray = ["0", "1", "2", "3", "4", "5", "6", "7"];
const slider = document.querySelector(".slider__wrapper .slider");
const left = document.querySelector(".our-friends__row .left");
const right = document.querySelector(".our-friends__row .right");

let sliderLeft = generateCards(".slider-left", [4, 5, 6]);
let sliderRight = generateCards(".slider-right", [3, 4, 7]);
let sliderActive = document.querySelector(".slider-active");

if (window.matchMedia("(max-width: 1279px)").matches) {
  cntCards = 2;
  sliderLeft = generateCards(".slider-left", [3, 5]);
  sliderRight = generateCards(".slider-right", [4, 7]);
  sliderActive = generateCards(".slider-active", [0, 1]);
}
if (window.matchMedia("(max-width: 767px)").matches) {
  cntCards = 1;
  sliderLeft = generateCards(".slider-left", [3]);
  sliderRight = generateCards(".slider-right", [5]);
  sliderActive = generateCards(".slider-active", [0]);
}

addButtonEventListener();
addSliderEventListener();
function addButtonEventListener() {
  left.addEventListener("click", moveLeft);
  right.addEventListener("click", moveRight);
}

function addSliderEventListener() {
  slider.addEventListener("animationend", (animationEvent) => {
    if (
      animationEvent.animationName == "move-left" ||
      animationEvent.animationName == "move-left-laptop" ||
      animationEvent.animationName == "move-left-tablet"
    ) {
      slider.classList.remove("transition-left");
      let innerHtmlLeft = sliderLeft.innerHTML;
      sliderActive.innerHTML = innerHtmlLeft;
    } else {
      slider.classList.remove("transition-right");
      let innerHtmlRight = sliderRight.innerHTML;
      sliderActive.innerHTML = innerHtmlRight;
    }

    addButtonEventListener();
  });
}
function moveLeft() {
  changeLeftContent();
  slider.classList.add("transition-left");
  left.removeEventListener("click", moveLeft);
}
function moveRight() {
  changeRightContent();
  slider.classList.add("transition-right");
  right.removeEventListener("click", moveRight);
}
// arrayIdObject массив Card.id которые не должны повторяться и быть как на предыдущем слайде(цифры от 0 до 7)

// getArrayInstancesPets() создает обьекты Card с полями из json файла. Нужно вызвать у них метод createCard чтобы создать элемент our-friends__item.
function getArrayInstancesPets(arrayIdObject) {
  let cards = [];
  for (let index = 0; index < cntCards; index++) {
    for (let ind = 0; ind < _assets_js_petsJson_mjs__WEBPACK_IMPORTED_MODULE_3__.arrayPets.length; ind++) {
      if (arrayIdObject[index] == _assets_js_petsJson_mjs__WEBPACK_IMPORTED_MODULE_3__.arrayPets[ind].id) {
        cards.push(new _assets_js_card_mjs__WEBPACK_IMPORTED_MODULE_2__.Card(_assets_js_petsJson_mjs__WEBPACK_IMPORTED_MODULE_3__.arrayPets[ind]));
        break;
      }
    }
  }
  return cards;
}
function getEmptyContainer(container) {
  let emptyContainer = document.querySelector(`${container}`);

  emptyContainer.innerHTML = "";
  return emptyContainer;
}

function generateCards(container, arrayAllow) {
  let containerNew = getEmptyContainer(container);

  let instancesCards = getArrayInstancesPets(arrayAllow);
  instancesCards.forEach((elem) => {
    containerNew.appendChild(elem.createCard());
  });
  return containerNew;
}
function changeLeftContent() {
  let arrayIdPets = getIdPetsFromActive();
  console.log("Left content arrayIdPets: " + arrayIdPets);
  let arrayAllowId = getArrayAllowId(arrayIdPets);

  let randomArrayId = generateArrayId(arrayAllowId);
  console.log(arrayAllowId, randomArrayId);
  generateCards(".slider-left", randomArrayId);
}
function changeRightContent() {
  let arrayIdPets = getIdPetsFromActive();
  console.log("Right content arrayIdPets: " + arrayIdPets);
  let arrayAllowId = getArrayAllowId(arrayIdPets);

  let randomArrayId = generateArrayId(arrayAllowId);

  generateCards(".slider-right", randomArrayId);
}
function getIdPetsFromActive() {
  let sliderActiveCards = document.querySelectorAll(".slider-active .card");
  let temp = [];
  sliderActiveCards.forEach((element) => {
    temp.push(element.dataset.id);
  });

  return temp;
}
function getArrayAllowId(arrayIdPets) {
  return initialArray.filter((elem) => !arrayIdPets.includes(elem));
}
function generateArrayId(arrayAllowId) {
  return shuffleSattolo(arrayAllowId);
}
function shuffleSattolo(array) {
  let arraySorted = array;
  for (let i = arraySorted.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arraySorted[i], arraySorted[j]] = [arraySorted[j], arraySorted[i]];
  }
  console.log("arraySorted: " + arraySorted);
  return arraySorted;
}

})();

/******/ })()
;
//# sourceMappingURL=index.js.map