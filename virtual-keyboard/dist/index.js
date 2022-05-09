/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/key.js":
/*!****************************!*\
  !*** ./src/modules/key.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Key)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Key = /*#__PURE__*/function () {
  function Key(code, kirKey, engKey, kirilShift, engShift) {
    _classCallCheck(this, Key);

    this.code = code;
    this.kirKey = kirKey;
    this.engKey = engKey;
    this.kirilShift = kirilShift;
    this.engShift = engShift;
  }

  _createClass(Key, [{
    key: "createKey",
    value: function createKey(language) {
      var key = document.createElement('div');
      var extra;

      if (language === 'eng') {
        if (this.engShift) {
          key.innerHTML = this.engKey;
          extra = document.createElement('span');
          extra.innerHTML = this.engShift;
          key.appendChild(extra);
          return key;
        }

        key.innerHTML = this.engKey;
      } else {
        if (this.kirilShift) {
          key.innerHTML = this.kirKey;
          extra = document.createElement('span');
          extra.innerHTML = this.kirilShift;
          key.appendChild(extra);
          return key;
        }

        key.innerHTML = this.kirKey;
      }

      return key;
    }
  }]);

  return Key;
}();



/***/ }),

/***/ "./src/modules/keyboard.js":
/*!*********************************!*\
  !*** ./src/modules/keyboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ "./src/modules/key.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable max-len */

var array = {
  codeArray: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Language'],
  kiril: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del', 'caps<br>lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter', 'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593', 'shift', 'ctrl', 'alt', '', 'alt', 'ctrl', '&#8592', '&#8595', '&#8594', 'ru'],
  kirilShift: [false, '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', false, false, false, false, false, false, false, false, false, false, false, false, false, false, '/', false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ',', false, false, false, false, false, false, false, false, false, false, false],
  english: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del', 'caps<br>lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter', 'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593', 'shift', 'ctrl', 'alt', '', 'alt', 'ctrl', '&#8592', '&#8595', '&#8594', 'us'],
  engShift: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', false, false, false, false, false, false, false, false, false, false, false, false, '{', '}', '|', false, false, false, false, false, false, false, false, false, false, false, ':', '"', false, false, false, false, false, false, false, false, false, '<', '>', '?', false, false, false, false, false, false, false, false, false, false, false],
  printKey: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Space']
};

var Keyboard = /*#__PURE__*/function () {
  function Keyboard() {
    _classCallCheck(this, Keyboard);

    _defineProperty(this, "arrayKeys", []);

    _defineProperty(this, "language", '');

    _defineProperty(this, "arrayInstance", []);

    this.kiril = array.kiril;
    this.english = array.english;
    this.codeArray = array.codeArray;
    this.kirilShift = array.kirilShift;
    this.engShift = array.engShift;
  }

  _createClass(Keyboard, [{
    key: "create",
    value: function create(language) {
      this.language = language;
      this.arrayKeys = [];

      for (var i = 0; i < this.codeArray.length; i++) {
        var temp = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](this.codeArray[i], this.kiril[i], this.english[i], this.kirilShift[i], this.engShift[i]);
        this.arrayInstance.push(temp);
        var elem = temp.createKey(this.language);
        elem.id = this.codeArray[i];
        if (i === 57) elem.classList.add('space');
        if (this.language === 'kir' && i === 28) elem.dataset.kiril = 'true';
        if (this.language === 'kir' && i === 57) elem.classList.add('space');
        this.arrayKeys.push(elem);
      }

      return this.arrayKeys;
    }
  }, {
    key: "getSimbolKey",
    value: function getSimbolKey(code, isShift) {
      var index = this.codeArray.indexOf(code);
      var simbol;

      if (code === 'Tab') {
        simbol = '    ';
      } else if (code === 'Space') {
        simbol = ' ';
      } else if (this.language === 'eng') {
        if (isShift) {
          simbol = this.engShift[index] ? this.engShift[index] : this.english[index];
        } else {
          simbol = this.english[index];
        }
      } else if (isShift) {
        simbol = this.kirilShift[index] ? this.kirilShift[index] : this.kiril[index];
      } else {
        simbol = this.kiril[index];
      }

      return simbol;
    }
  }], [{
    key: "highlightKey",
    value: function highlightKey(code) {
      var elem = document.querySelector("#".concat(code));
      elem.classList.add('active');
    }
  }, {
    key: "removeHighlightKey",
    value: function removeHighlightKey(code) {
      var elem = document.querySelector("#".concat(code));
      elem.classList.remove('active');
    }
  }, {
    key: "isPrintKey",
    value: function isPrintKey(code) {
      return array.printKey.includes(code);
    }
  }]);

  return Keyboard;
}();



/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _modules_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/keyboard */ "./src/modules/keyboard.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var isEnglish = window.sessionStorage.getItem('isEnglish') === 'true';
var capsLock = false;
var pressed = new Set();
var pairOfkeys = ['AltLeft', 'ShiftLeft'];
var isShift = false;
var keyBoardBlock;
var textField;
var languages;

function createDocumentElement(clas, name) {
  var elem = document.createElement("".concat(clas));
  elem.className = "".concat(name);
  return elem;
}

function createHtml() {
  var wrapper = createDocumentElement('div', 'wrapper');
  document.body.appendChild(wrapper);
  var board = createDocumentElement('div', 'board');
  wrapper.appendChild(board);
  var label = createDocumentElement('div', 'label');
  board.appendChild(label);
  languages = createDocumentElement('span', 'language');
  languages.textContent += isEnglish ? 'English' : 'Русский';
  var madeForWindows = createDocumentElement('span', 'made-for-windows');
  madeForWindows.innerHTML = 'Change Language: LeftAlt + LeftShift<br>Made for Windows';
  label.appendChild(languages);
  label.appendChild(madeForWindows);
  board.appendChild(label);
  textField = createDocumentElement('textarea', 'text-field');
  textField.setAttribute('rows', '8');
  textField.setAttribute('autofocus', true);
  textField.style.fontSize = '25px';
  board.appendChild(textField);
  keyBoardBlock = createDocumentElement('div', 'key-board-block');
  board.appendChild(keyBoardBlock);
}

createHtml();
var keyboard = new _modules_keyboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
var arrayKeys = keyboard.create(isEnglish ? 'eng' : 'kir');
arrayKeys.forEach(function (elem) {
  keyBoardBlock.appendChild(elem);
});

function arrowUp() {
  if (!textField.value.split('').includes('\n')) return;
  var arr = [];

  for (var i = 0; i < textField.value.length; i++) {
    if (textField.value[i] === '\n') arr.push(i);
    if (i === textField.selectionStart) break;
  }

  if (arr.length !== 0) {
    var currentPos = textField.selectionStart;

    if (arr.length === 1) {
      if (currentPos === arr[arr.length - 1]) {
        return;
      } // eslint-disable-next-line max-len


      textField.selectionStart = currentPos - arr[arr.length - 1] <= arr[arr.length - 1] ? currentPos - arr[arr.length - 1] - 1 : arr[arr.length - 1];
    } else if (currentPos === arr[arr.length - 1]) {
      arr = arr.splice(0, arr.length - 1);

      if (arr.length === 1) {
        textField.selectionStart = currentPos - arr[arr.length - 1] <= arr[arr.length - 1] ? currentPos - arr[arr.length - 1] - 1 : arr[arr.length - 1];
      } else {
        // eslint-disable-next-line max-len
        textField.selectionStart = currentPos - arr[arr.length - 1] - 1 <= arr[arr.length - 1] - arr[arr.length - 2] - 1 ? currentPos - arr[arr.length - 1] + arr[arr.length - 2] : arr[arr.length - 1];
      }
    } else {
      // eslint-disable-next-line max-len
      textField.selectionStart = currentPos - arr[arr.length - 1] - 1 <= arr[arr.length - 1] - arr[arr.length - 2] - 1 ? currentPos - arr[arr.length - 1] + arr[arr.length - 2] : arr[arr.length - 1];
    }

    textField.selectionEnd = textField.selectionStart;
  }
}

function arrowDown() {
  var currentPos = textField.selectionStart;
  var arr = [];

  for (var i = 0; i < textField.value.length; i++) {
    if (textField.value[i] === '\n') arr.push(i + 1);
  }

  if (arr.length !== 0) {
    var prev;
    var next;
    var indPrev;

    if (currentPos < arr[0]) {
      prev = 0;
      next = arr[0];
      indPrev = 0;
    } else {
      for (var _i = 0; _i < arr.length; _i++) {
        if (_i + 1 < arr.length) {
          if (currentPos >= arr[_i] && currentPos < arr[_i + 1]) {
            prev = arr[_i];
            next = arr[_i + 1];
            indPrev = _i + 1;
            break;
          }
        } else {
          prev = arr[_i];
          next = arr[_i];
        }
      }
    }

    var newPos = currentPos - prev + next;

    if (prev !== next) {
      var indNext = indPrev + 1 < arr.length ? indPrev + 1 : textField.value.length;

      if (newPos - arr[indPrev] > arr[indNext] - arr[indPrev] - 1) {
        newPos = arr[indNext] - 1;
      }
    }

    textField.selectionStart = newPos;
    textField.selectionEnd = textField.selectionStart;
  }
}

function handleDown(e, code) {
  e.preventDefault();
  _modules_keyboard__WEBPACK_IMPORTED_MODULE_1__["default"].highlightKey(code);

  function changeLanguage() {
    pressed.add(code);
    /* eslint-disable-next-line */

    var _iterator = _createForOfIteratorHelper(pairOfkeys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        if (!pressed.has(key)) return;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    pressed.clear();
    arrayKeys = isEnglish ? keyboard.create('kir') : keyboard.create('eng');
    isEnglish = !isEnglish;
    capsLock = false;
    languages.textContent = isEnglish ? 'English' : 'Русский';
    window.sessionStorage.setItem('isEnglish', isEnglish);
    setInterval(function () {
      keyBoardBlock.innerHTML = '';
      arrayKeys.forEach(function (elem) {
        keyBoardBlock.appendChild(elem);
      });
    }, 500);
  }

  changeLanguage(e);

  function insertSimbol() {
    textField.setRangeText(keyboard.getSimbolKey(code, isShift), textField.selectionStart, textField.selectionEnd, 'end');
  }

  function insertUpperCaseSimbol() {
    textField.setRangeText(keyboard.getSimbolKey(code, isShift).toUpperCase(), textField.selectionStart, textField.selectionEnd, 'end');
  }

  function checkConditions() {
    if (_modules_keyboard__WEBPACK_IMPORTED_MODULE_1__["default"].isPrintKey(code)) {
      if (!capsLock) {
        insertSimbol(code);
      } else {
        insertUpperCaseSimbol(code);
      }

      textField.focus();
    }
  }

  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    isShift = true;
  }

  if (_modules_keyboard__WEBPACK_IMPORTED_MODULE_1__["default"].isPrintKey(code) && isShift) {
    if (_modules_keyboard__WEBPACK_IMPORTED_MODULE_1__["default"].isPrintKey(code)) {
      if (!capsLock && !isShift || capsLock && isShift) {
        insertSimbol(code);
      } else {
        insertUpperCaseSimbol(code);
      }
    }
  } else checkConditions();

  if (code === 'Language') {
    arrayKeys = isEnglish ? keyboard.create('kir') : keyboard.create('eng');
    isEnglish = !isEnglish;
    capsLock = false;
    languages.textContent = isEnglish ? 'English' : 'Русский';
    window.sessionStorage.setItem('isEnglish', isEnglish);
    setInterval(function () {
      keyBoardBlock.innerHTML = '';
      arrayKeys.forEach(function (elem) {
        keyBoardBlock.appendChild(elem);
      });
    }, 1000);
  }

  switch (code) {
    case 'Backspace':
      if (textField.selectionStart > 0) {
        textField.setRangeText('', textField.selectionStart -= 1, textField.selectionEnd);
      }

      break;

    case 'Delete':
      textField.setRangeText('', textField.selectionStart, textField.selectionEnd += 1);
      break;

    case 'ArrowLeft':
      if (textField.selectionStart > 0) {
        textField.selectionStart -= 1;
        textField.selectionEnd -= 1;
      }

      break;

    case 'ArrowRight':
      textField.selectionEnd += 1;
      textField.selectionStart += 1;
      break;

    case 'Enter':
      textField.setRangeText('\n', textField.selectionStart, textField.selectionEnd, 'end');
      break;

    case 'ArrowUp':
      arrowUp();
      break;

    case 'ArrowDown':
      arrowDown();
      break;

    default:
      break;
  }
}

function handleUp(e, code) {
  e.preventDefault();
  pressed["delete"](code);

  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    isShift = false;
  }

  if (code === 'CapsLock' && capsLock) {
    capsLock = !capsLock;
    _modules_keyboard__WEBPACK_IMPORTED_MODULE_1__["default"].removeHighlightKey(code);
  } else if (code === 'CapsLock' && !capsLock) {
    capsLock = !capsLock;
  } else _modules_keyboard__WEBPACK_IMPORTED_MODULE_1__["default"].removeHighlightKey(code);
}

document.body.addEventListener('keydown', function (e) {
  handleDown(e, e.code);
});
keyBoardBlock.addEventListener('mousedown', function (e) {
  handleDown(e, e.target.id);
});
document.body.addEventListener('keyup', function (e) {
  handleUp(e, e.code);
});
keyBoardBlock.addEventListener('mouseup', function (e) {
  handleUp(e, e.target.id);
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map