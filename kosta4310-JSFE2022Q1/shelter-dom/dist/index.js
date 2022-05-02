/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/main/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(jsonObject) {
    _classCallCheck(this, Card);

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

  _createClass(Card, [{
    key: "createCard",
    value: function createCard() {
      var card = document.createElement("div");
      card.className = "our-friends__item";
      card.innerHTML = "";
      card.innerHTML = " \n                <div class=\"card\" data-id=\"".concat(this.id, "\">\n                  <div class=\"card__image\">\n                    <img\n                      src=\"").concat(this.imgSmall, "\"\n                      alt=\"").concat(this.name, "\"\n                    />\n                  </div>\n                  <div class=\"card__title\">\n                    <h4 class=\"h4_lite\">").concat(this.name, "</h4>\n                  </div>\n                  <div class=\"card__button\">\n                    <span class=\"button\"> Learn more </span>\n                  </div>\n                </div>\n              ");
      return card;
    }
  }]);

  return Card;
}();

/***/ }),

/***/ "./src/js/hamburger.js":
/*!*****************************!*\
  !*** ./src/js/hamburger.js ***!
  \*****************************/
/*! exports provided: hamburger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hamburger", function() { return hamburger; });
function hamburger() {
  var hamburger = document.querySelector(".hamburger");
  var menu = document.querySelector(".header__menu .menu");
  var linksMenu = document.querySelectorAll(".menu a");
  var overlay = document.querySelector(".header .overlay");
  linksMenu.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      setTimeout(function () {
        return window.location.replace(e.target.href);
      }, 500);
    });
  });
  hamburger.addEventListener("click", function () {
    if (menu.dataset.id == "closed") {
      console.log("open");
      openAll();
    } else {
      console.log("close");
      closeAll();
    }
  });
  menu.addEventListener("click", function (e) {
    if (e.target.classList.contains("link-menu")) {
      closeAll();
    }
  });
  overlay.addEventListener("click", function () {
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

  var openMenu = function openMenu() {
    menu.style.right = "0px";
  };

  var closeMenu = function closeMenu() {
    menu.style.right = "-320px";
  };

  var openOverlay = function openOverlay() {
    overlay.style.display = "block";
  };

  var closeOverlay = function closeOverlay() {
    overlay.style.display = "none";
  };
}

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! exports provided: popUp, popUpSecond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popUp", function() { return popUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popUpSecond", function() { return popUpSecond; });
/* harmony import */ var _petsJson_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./petsJson.js */ "./src/js/petsJson.js");

function popUp() {
  var modal = document.querySelector(".our-friends .modal");
  var buttonCloseModal = document.querySelector(".button-close-modal");
  var overlayPopUp = document.querySelector(".overlay-pop-up");
  var modalImage = document.querySelector(".overlay-pop-up .modal__image");
  var sliderLine = document.querySelector(".our-friends .slider .slider-active");
  var card = document.querySelector(".our-friends .card");
  sliderLine.addEventListener("click", function (e) {
    var cardTarget = e.target.closest(".card");

    if (cardTarget) {
      var idCard = cardTarget.dataset.id;
      openModal(_petsJson_js__WEBPACK_IMPORTED_MODULE_0__["arrayPets"][idCard]);
    }
  });
  window.addEventListener("click", function (e) {
    var targerClassList = e.target.classList;

    if (targerClassList.contains("overlay-pop-up") || targerClassList.contains("button-close-modal") || targerClassList.contains("button-close-modal__image")) {
      closeModal();
      console.log(e.target.classList);
    }
  }); // idObject обькт из массива обектов под номеро id

  var openModal = function openModal(idObject) {
    overlayPopUp.style.display = "block";
    loadDataForCard(idObject);
    document.body.style.overflow = "hidden";
  };

  var closeModal = function closeModal() {
    overlayPopUp.style.display = "none";
    document.body.style.overflow = "";
  }; // let temp = arrayPets[1];


  var loadDataForCard = function loadDataForCard(object) {
    document.querySelector(".overlay-pop-up .modal__image").innerHTML = "<img src=\"".concat(object.img, "\" alt=\"").concat(object.name, "\">");
    document.querySelector(".overlay-pop-up .modal__name h3").textContent = "".concat(object.name);
    document.querySelector(".overlay-pop-up .modal__content .type").textContent = "".concat(object.type);
    document.querySelector(".overlay-pop-up .modal__content .breed").textContent = "".concat(object.breed);
    document.querySelector(".overlay-pop-up .modal__content .content__description").textContent = "".concat(object.description);
    document.querySelector(".overlay-pop-up .modal__content .age h5").textContent = "".concat(object.age);
    document.querySelector(".overlay-pop-up .modal__content .inoculations h5").textContent = "".concat(object.inoculations);
    document.querySelector(".overlay-pop-up .modal__content .diseases h5").textContent = "".concat(object.diseases);
    document.querySelector(".overlay-pop-up .modal__content .parasites h5").textContent = "".concat(object.parasites);
  }; // =================


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
  var modal = document.querySelector(".our-friends .modal");
  var overlayPopUp = document.querySelector(".overlay-pop-up");
  var buttonCloseModal = document.querySelector(".button-close-modal");
  var sliderLine = document.querySelector(".our-friends .our-friends__row");
  var card = document.querySelector(".our-friends .card");
  sliderLine.addEventListener("click", function (e) {
    var cardTarget = e.target.closest(".card");

    if (cardTarget) {
      var idCard = cardTarget.dataset.id;
      openModal(_petsJson_js__WEBPACK_IMPORTED_MODULE_0__["arrayPets"][idCard]);
    }
  });
  window.addEventListener("click", function (e) {
    var targerClassList = e.target.classList;

    if (targerClassList.contains("overlay-pop-up") || targerClassList.contains("button-close-modal") || targerClassList.contains("button-close-modal__image")) {
      closeModal();
      console.log(e.target.classList);
    }
  }); // idObject обькт из массива обектов под номеро id

  var openModal = function openModal(idObject) {
    overlayPopUp.style.display = "block";
    loadDataForCard(idObject);
    document.body.style.overflow = "hidden";
  };

  var closeModal = function closeModal() {
    overlayPopUp.style.display = "none";
    document.body.style.overflow = "";
  }; // let temp = arrayPets[1];


  var loadDataForCard = function loadDataForCard(object) {
    document.querySelector(".overlay-pop-up .modal__image").innerHTML = "<img src=\"".concat(object.img, "\" alt=\"").concat(object.name, "\">");
    document.querySelector(".overlay-pop-up .modal__name h3").textContent = "".concat(object.name);
    document.querySelector(".overlay-pop-up .modal__content .type").textContent = "".concat(object.type);
    document.querySelector(".overlay-pop-up .modal__content .breed").textContent = "".concat(object.breed);
    document.querySelector(".overlay-pop-up .modal__content .content__description").textContent = "".concat(object.description);
    document.querySelector(".overlay-pop-up .modal__content .age h5").textContent = "".concat(object.age);
    document.querySelector(".overlay-pop-up .modal__content .inoculations h5").textContent = "".concat(object.inoculations);
    document.querySelector(".overlay-pop-up .modal__content .diseases h5").textContent = "".concat(object.diseases);
    document.querySelector(".overlay-pop-up .modal__content .parasites h5").textContent = "".concat(object.parasites);
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

/***/ "./src/js/petsJson.js":
/*!****************************!*\
  !*** ./src/js/petsJson.js ***!
  \****************************/
/*! exports provided: arrayPets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayPets", function() { return arrayPets; });
var arrayPets = [{
  name: "Katrine",
  id: 0,
  img: "../../assets/images/pets-upscale/katrine.png",
  imgSmall: "../../assets/pets/katrine.png",
  type: "Cat",
  breed: "British Shorthair",
  description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
  age: "6 months",
  inoculations: ["panleukopenia"],
  diseases: ["none"],
  parasites: ["none"]
}, {
  name: "Jennifer",
  id: 1,
  img: "../../assets/images/pets-upscale/jennifer.png",
  imgSmall: "../../assets/pets/jennifer.png",
  type: "Dog",
  breed: "Labrador",
  description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
  age: "2 months",
  inoculations: ["none"],
  diseases: ["none"],
  parasites: ["none"]
}, {
  name: "Woody",
  id: 2,
  img: "../../assets/images/pets-upscale/woody.png",
  imgSmall: "../../assets/pets/woody.png",
  type: "Dog",
  breed: "Golden Retriever",
  description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
  age: "3 years 6 months",
  inoculations: ["adenovirus", "distemper"],
  diseases: ["right back leg mobility reduced"],
  parasites: ["none"]
}, {
  name: "Sophia",
  id: 3,
  img: "../../assets/images/pets-upscale/sophia.png",
  imgSmall: "../../assets/pets/sophia.png",
  type: "Dog",
  breed: "Shih tzu",
  description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
  age: "1 month",
  inoculations: ["parvovirus"],
  diseases: ["none"],
  parasites: ["none"]
}, {
  name: "Timmy",
  id: 4,
  img: "../../assets/images/pets-upscale/timmy.png",
  imgSmall: "../../assets/pets/timmy.png",
  type: "Cat",
  breed: "British Shorthair",
  description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
  age: "2 years 3 months",
  inoculations: ["calicivirus", "viral rhinotracheitis"],
  diseases: ["kidney stones"],
  parasites: ["none"]
}, {
  name: "Charly",
  id: 5,
  img: "../../assets/images/pets-upscale/charly.png",
  imgSmall: "../../assets/pets/charly.png",
  type: "Dog",
  breed: "Jack Russell Terrier",
  description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
  age: "8 years",
  inoculations: ["bordetella bronchiseptica", "leptospirosis"],
  diseases: ["deafness", "blindness"],
  parasites: ["lice", "fleas"]
}, {
  name: "Scarlett",
  id: 6,
  img: "../../assets/images/pets-upscale/scarlett.png",
  imgSmall: "../../assets/pets/scarlett.png",
  type: "Dog",
  breed: "Jack Russell Terrier",
  description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
  age: "3 months",
  inoculations: ["parainfluenza"],
  diseases: ["none"],
  parasites: ["none"]
}, {
  name: "Freddie",
  id: 7,
  img: "../../assets/images/pets-upscale/freddie.png",
  imgSmall: "../../assets/pets/freddie.png",
  type: "Cat",
  breed: "British Shorthair",
  description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
  age: "2 months",
  inoculations: ["rabies"],
  diseases: ["none"],
  parasites: ["none"]
}];

/***/ }),

/***/ "./src/pages/main/index.js":
/*!*********************************!*\
  !*** ./src/pages/main/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_hamburger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/hamburger.js */ "./src/js/hamburger.js");
/* harmony import */ var _js_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/modal.js */ "./src/js/modal.js");
/* harmony import */ var _js_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/card.js */ "./src/js/card.js");
/* harmony import */ var _js_petsJson_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/petsJson.js */ "./src/js/petsJson.js");




_js_hamburger_js__WEBPACK_IMPORTED_MODULE_0__["hamburger"]();
Object(_js_modal_js__WEBPACK_IMPORTED_MODULE_1__["popUp"])();
var cntCards = 3;
var initialArray = ["0", "1", "2", "3", "4", "5", "6", "7"];
var slider = document.querySelector(".slider__wrapper .slider");
var left = document.querySelector(".our-friends__row .left");
var right = document.querySelector(".our-friends__row .right");
var sliderLeft = generateCards(".slider-left", [4, 5, 6]);
var sliderRight = generateCards(".slider-right", [3, 4, 7]);
var sliderActive = document.querySelector(".slider-active");

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
  slider.addEventListener("animationend", function (animationEvent) {
    if (animationEvent.animationName == "move-left" || animationEvent.animationName == "move-left-laptop" || animationEvent.animationName == "move-left-tablet") {
      slider.classList.remove("transition-left");
      var innerHtmlLeft = sliderLeft.innerHTML;
      sliderActive.innerHTML = innerHtmlLeft;
    } else {
      slider.classList.remove("transition-right");
      var innerHtmlRight = sliderRight.innerHTML;
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
} // arrayIdObject массив Card.id которые не должны повторяться и быть как на предыдущем слайде(цифры от 0 до 7)
// getArrayInstancesPets() создает обьекты Card с полями из json файла. Нужно вызвать у них метод createCard чтобы создать элемент our-friends__item.


function getArrayInstancesPets(arrayIdObject) {
  var cards = [];

  for (var index = 0; index < cntCards; index++) {
    for (var ind = 0; ind < _js_petsJson_js__WEBPACK_IMPORTED_MODULE_3__["arrayPets"].length; ind++) {
      if (arrayIdObject[index] == _js_petsJson_js__WEBPACK_IMPORTED_MODULE_3__["arrayPets"][ind].id) {
        cards.push(new _js_card_js__WEBPACK_IMPORTED_MODULE_2__["Card"](_js_petsJson_js__WEBPACK_IMPORTED_MODULE_3__["arrayPets"][ind]));
        break;
      }
    }
  }

  return cards;
}

function getEmptyContainer(container) {
  var emptyContainer = document.querySelector("".concat(container));
  emptyContainer.innerHTML = "";
  return emptyContainer;
}

function generateCards(container, arrayAllow) {
  var containerNew = getEmptyContainer(container);
  var instancesCards = getArrayInstancesPets(arrayAllow);
  instancesCards.forEach(function (elem) {
    containerNew.appendChild(elem.createCard());
  });
  return containerNew;
}

function changeLeftContent() {
  var arrayIdPets = getIdPetsFromActive();
  console.log("Left content arrayIdPets: " + arrayIdPets);
  var arrayAllowId = getArrayAllowId(arrayIdPets);
  var randomArrayId = generateArrayId(arrayAllowId);
  console.log(arrayAllowId, randomArrayId);
  generateCards(".slider-left", randomArrayId);
}

function changeRightContent() {
  var arrayIdPets = getIdPetsFromActive();
  console.log("Right content arrayIdPets: " + arrayIdPets);
  var arrayAllowId = getArrayAllowId(arrayIdPets);
  var randomArrayId = generateArrayId(arrayAllowId);
  generateCards(".slider-right", randomArrayId);
}

function getIdPetsFromActive() {
  var sliderActiveCards = document.querySelectorAll(".slider-active .card");
  var temp = [];
  sliderActiveCards.forEach(function (element) {
    temp.push(element.dataset.id);
  });
  return temp;
}

function getArrayAllowId(arrayIdPets) {
  return initialArray.filter(function (elem) {
    return !arrayIdPets.includes(elem);
  });
}

function generateArrayId(arrayAllowId) {
  return shuffleSattolo(arrayAllowId);
}

function shuffleSattolo(array) {
  var arraySorted = array;

  for (var i = arraySorted.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [arraySorted[j], arraySorted[i]];
    arraySorted[i] = _ref[0];
    arraySorted[j] = _ref[1];
  }

  console.log("arraySorted: " + arraySorted);
  return arraySorted;
}

/***/ })

/******/ });
//# sourceMappingURL=index.js.map