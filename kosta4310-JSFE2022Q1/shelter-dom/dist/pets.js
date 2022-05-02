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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/pets/pets.js");
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

/***/ "./src/js/generateArray.js":
/*!*********************************!*\
  !*** ./src/js/generateArray.js ***!
  \*********************************/
/*! exports provided: generateArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateArray", function() { return generateArray; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function generateArray(cntCards) {
  var arrayArrays = [];
  var arr = [];
  var initArray = getInitArray();
  var arrayAll = [];

  for (var j = 0; j < 48 / cntCards; j++) {
    arr = initArray.slice(j * cntCards, cntCards * (j + 1));
    arr = shuffleSattolo(arr);
    arrayArrays.push(arr);
  }

  arrayArrays = shuffleSattolo(arrayArrays);
  arrayArrays.forEach(function (arr) {
    arrayAll.push.apply(arrayAll, _toConsumableArray(arr));
  });

  function getInitArray() {
    var init = [];

    for (var i = 0; i < 6; i++) {
      for (var _j = 0; _j < 8; _j++) {
        init.push(_j);
      }
    }

    return init;
  }

  function shuffleSattolo(array) {
    var arraySorted = array;

    for (var i = arraySorted.length - 1; i > 0; i--) {
      var _j2 = Math.floor(Math.random() * (i + 1));

      var _ref = [arraySorted[_j2], arraySorted[i]];
      arraySorted[i] = _ref[0];
      arraySorted[_j2] = _ref[1];
    }

    return arraySorted;
  }

  return arrayAll;
}

/***/ }),

/***/ "./src/js/hamburgerBlack.js":
/*!**********************************!*\
  !*** ./src/js/hamburgerBlack.js ***!
  \**********************************/
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

/***/ "./src/js/pages.js":
/*!*************************!*\
  !*** ./src/js/pages.js ***!
  \*************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Page = /*#__PURE__*/_createClass(function Page(n, k) {
  _classCallCheck(this, Page);

  this.n = n;
  /*номер страницы */

  this.k = k;
  /*количество фото на странице */
});

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

/***/ "./src/pages/pets/pets.js":
/*!********************************!*\
  !*** ./src/pages/pets/pets.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_hamburgerBlack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/hamburgerBlack.js */ "./src/js/hamburgerBlack.js");
/* harmony import */ var _js_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/modal.js */ "./src/js/modal.js");
/* harmony import */ var _js_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/card.js */ "./src/js/card.js");
/* harmony import */ var _js_petsJson_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/petsJson.js */ "./src/js/petsJson.js");
/* harmony import */ var _js_pages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/pages.js */ "./src/js/pages.js");
/* harmony import */ var _js_generateArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../js/generateArray.js */ "./src/js/generateArray.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







_js_hamburgerBlack_js__WEBPACK_IMPORTED_MODULE_0__["hamburger"]();
_js_modal_js__WEBPACK_IMPORTED_MODULE_1__["popUpSecond"]();
var pages = new _js_pages_js__WEBPACK_IMPORTED_MODULE_4__["Page"](1, 8); // let arrayRandomCards = generateArrayNumbers(8);

var arrayRandomCards = getStartArray();

if (window.matchMedia("(max-width: 1279px)").matches) {
  pages = new _js_pages_js__WEBPACK_IMPORTED_MODULE_4__["Page"](1, 6);
  arrayRandomCards = Object(_js_generateArray_js__WEBPACK_IMPORTED_MODULE_5__["generateArray"])(6);
}

if (window.matchMedia("(max-width: 767px)").matches) {
  pages = new _js_pages_js__WEBPACK_IMPORTED_MODULE_4__["Page"](1, 3);
  arrayRandomCards = Object(_js_generateArray_js__WEBPACK_IMPORTED_MODULE_5__["generateArray"])(3);
} // ================ramdom cards
// let k; /*количество элементов на странице */
// let n = 1; /*номер страницы*/


var arrayIdObject = getArrayIdObject(pages.n, pages.k);
/*выдает массив id из рендомного массива по нужной странице */
// ==============
// function generateArrayNumbers(cntOfCards) {
//   // let arrayRandomCards = [0, 1, 2, 3, 4, 5, 6, 7];
//   // for (let i = 0; i < 40; i++) {
//   //   let random = Math.floor(Math.random() * 8);
//   //   arrayRandomCards.push(random);
//   // }
//   // return arrayRandomCards;
//   return getArrayAll(cntOfCards);
// }

var emptyContainer = getEmptyContainer();
var cards = getArraySortedPets(arrayIdObject);
/*получаем карточки на нужной странице */
// подключение карточек в документ

cards.forEach(function (card) {
  emptyContainer.appendChild(card.createCard());
}); // выдает массив id из рендомного массива по нужной странице

function getArrayIdObject(n, k) {
  var arrayIdObject = [];

  for (var i = (n - 1) * k; i < n * k; i++) {
    arrayIdObject.push(arrayRandomCards[i]);
  }

  return arrayIdObject;
} // ===================


addButtonPageEventListener();

function addButtonPageEventListener() {
  document.querySelector(".pagination .pagination__row").addEventListener("click", function (e) {
    if (e.target.closest(".page__left-left")) pageLeftLeft();
    if (e.target.closest(".page__left")) pageLeft();
    if (e.target.closest(".page__right-right")) pageRightRight();
    if (e.target.closest(".page__right")) pageRight();
  });
}

function pageLeft() {
  if (pages.n > 1) pages.n -= 1;

  if (pages.n == 1) {
    setButtonDisable(".page__left");
    setButtonDisable(".page__left-left");
  }

  if (pages.n == 48 / pages.k - 1) {
    setButtonEnable(".page__right");
    setButtonEnable(".page__right-right");
  }

  changePage();
  numberShowPage.textContent = "".concat(pages.n);
}

function pageRight() {
  if (pages.n == 1) {
    setButtonEnable(".page__left");
    setButtonEnable(".page__left-left");
  }

  if (pages.n < 48 / pages.k) pages.n += 1;

  if (pages.n == 48 / pages.k) {
    setButtonDisable(".page__right");
    setButtonDisable(".page__right-right");
  }

  changePage();
  numberShowPage.textContent = "".concat(pages.n);
}

function pageLeftLeft() {
  pages.n = 1;
  setButtonEnable(".page__right");
  setButtonEnable(".page__right-right");
  setButtonDisable(".page__left");
  setButtonDisable(".page__left-left");
  changePage();
  numberShowPage.textContent = "".concat(pages.n);
}

function pageRightRight() {
  pages.n = 48 / pages.k;
  setButtonEnable(".page__left");
  setButtonEnable(".page__left-left");
  setButtonDisable(".page__right");
  setButtonDisable(".page__right-right");
  changePage();
  numberShowPage.textContent = "".concat(pages.n);
} // ===================
// =================================
// let cards = [];
// arrayPets.forEach((object) => {
//   cards.push(new Card(object));
// });


function getArraySortedPets(arrayIdObject) {
  var cards = [];

  for (var index = 0; index < arrayIdObject.length; index++) {
    for (var ind = 0; ind < _js_petsJson_js__WEBPACK_IMPORTED_MODULE_3__["arrayPets"].length; ind++) {
      if (arrayIdObject[index] == _js_petsJson_js__WEBPACK_IMPORTED_MODULE_3__["arrayPets"][ind].id) {
        cards.push(new _js_card_js__WEBPACK_IMPORTED_MODULE_2__["Card"](_js_petsJson_js__WEBPACK_IMPORTED_MODULE_3__["arrayPets"][ind]));
      }
    }
  }

  return cards;
}

function setButtonDisable(selectorClass) {
  document.querySelector(".pagination .pagination__row ".concat(selectorClass)).setAttribute("disabled", "true");
}

function setButtonEnable(selectorClass) {
  document.querySelector(".pagination .pagination__row ".concat(selectorClass)).removeAttribute("disabled");
} // ====================


var numberShowPage = document.querySelector(".pagination .page-number span");

function getEmptyContainer() {
  var emptyContainer = document.querySelector(".slider-line");
  emptyContainer.innerHTML = "";
  return emptyContainer;
}

function changePage() {
  var emptyContainer = getEmptyContainer();
  var arrayIdObject = getArrayIdObject(pages.n, pages.k);
  var cards = getArraySortedPets(arrayIdObject);
  cards.forEach(function (card) {
    emptyContainer.appendChild(card.createCard());
  });
  return emptyContainer;
} // function getArrayAll(cntOfCards) {
//   let arrayAll = [];
//   for (let j = 0; j < 48 / cntOfCards; j++) {
//     arrayAll = arrayAll.concat(getRecursionArray(cntOfCards));
//   }
//   return arrayAll;
// }
// let temp = getArrayAll(6);
// console.log(temp);


function getRecursionArray(cntOfCards) {
  var res = [];
  var i = 8;
  var arr = [0, 1, 2, 3, 4, 5, 6, 7];

  function recursion(arr, k) {
    var arrIn = arr;
    if (k == 0) return res;
    var index = Math.floor(Math.random() * i);
    res.push.apply(res, _toConsumableArray(arrIn.splice(index, 1)));
    i--;
    return recursion(arrIn, k - 1);
  }

  var t = recursion(arr, cntOfCards);
  return t;
}

function getStartArray() {
  var start = [0, 1, 2, 3, 4, 5, 6, 7];
  var temp = [0, 1, 2, 3, 4, 5, 6, 7];

  for (var j = 0; j < 5; j++) {
    temp = shuffleSattolo(temp);
    start.push.apply(start, _toConsumableArray(temp));
  }

  return start;
}

function shuffleSattolo(array) {
  var arraySorted = array;

  for (var i = arraySorted.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [arraySorted[j], arraySorted[i]];
    arraySorted[i] = _ref[0];
    arraySorted[j] = _ref[1];
  }

  return arraySorted;
}

/***/ })

/******/ });
//# sourceMappingURL=pets.js.map