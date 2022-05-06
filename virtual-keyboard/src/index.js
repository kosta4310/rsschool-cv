import './css/style.css';
import Keyboard from './modules/keyboard';

let isEnglish = (
  window.sessionStorage.getItem('isEnglish')
) === 'true';

let capsLock = false;
const pressed = new Set();
const pairOfkeys = ['AltLeft', 'ShiftLeft'];
let isShift = false;
let keyBoardBlock;
let textField;
let languages;

function createDocumentElement(clas, name) {
   const elem = document.createElement(`${clas}`);
   elem.className = `${name}`;
      return elem;
}
function createHtml() {
   const wrapper = createDocumentElement('div', 'wrapper');
   document.body.appendChild(wrapper);
   const board = createDocumentElement('div', 'board');
   wrapper.appendChild(board);
   const label = createDocumentElement('div', 'label');
   board.appendChild(label);
   languages = createDocumentElement('span', 'language');
   languages.textContent = isEnglish ? 'English' : 'Русский';
   const madeForWindows = createDocumentElement('span', 'made-for-windows');
   madeForWindows.textContent = 'Made for Windows';
   label.appendChild(languages);
   label.appendChild(madeForWindows);
   board.appendChild(label);
   textField = createDocumentElement('textarea', 'text-field');
   textField.setAttribute('rows', '10');
   textField.setAttribute('autofocus', true);
   textField.style.fontSize = '25px';
   board.appendChild(textField);
   keyBoardBlock = createDocumentElement('div', 'key-board-block');
   board.appendChild(keyBoardBlock);
}
createHtml();
const keyboard = new Keyboard();

let arrayKeys = keyboard.create(isEnglish ? 'eng' : 'kir');
arrayKeys.forEach((elem) => {
  keyBoardBlock.appendChild(elem);
});

function handleDown(e, code) {
  e.preventDefault();

  Keyboard.highlightKey(code);
   function changeLanguage() {
     pressed.add(code);
     /* eslint-disable-next-line */
     for (const key of pairOfkeys) {
       if (!pressed.has(key)) return;
     }
     pressed.clear();
     arrayKeys = isEnglish ? keyboard.create('kir') : keyboard.create('eng');
     isEnglish = !isEnglish;
     capsLock = false;
     languages.textContent = isEnglish ? 'English' : 'Русский';
     window.sessionStorage.setItem('isEnglish', isEnglish);
     keyBoardBlock.innerHTML = '';
     arrayKeys.forEach((elem) => {
       keyBoardBlock.appendChild(elem);
     });
   }
  changeLanguage(e);
  function insertSimbol() {
    textField.setRangeText(
      keyboard.getSimbolKey(code),
      textField.selectionStart,
      textField.selectionEnd,
      'end',
    );
  }
  function insertUpperCaseSimbol() {
    textField.setRangeText(
      keyboard.getSimbolKey(code).toUpperCase(),
      textField.selectionStart,
      textField.selectionEnd,
      'end',

    );
  }
  function checkConditions() {
    if (Keyboard.isPrintKey(code)) {
      if (code === 'Space') textField.textContent += ' ';
      else if (code === 'Tab') textField.textContent += '  ';
      else if (!capsLock) {
        // textField.textContent += keyboard.getSimbolKey(code);
        insertSimbol(code);
      } else {
        insertUpperCaseSimbol(code);
      }

      textField.focus();
    }
  }
  if (code === 'ShiftLeft') {
    isShift = true;
  }
  if (Keyboard.isPrintKey(code) && isShift) {
    if (Keyboard.isPrintKey(code)) {
      if (code === 'Space') textField.textContent += ' ';
      else if (code === 'Tab') textField.textContent += '  ';
      else if ((!capsLock && !isShift) || (capsLock && isShift)) {
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
   keyBoardBlock.innerHTML = '';
   arrayKeys.forEach((elem) => {
     keyBoardBlock.appendChild(elem);
   });
  }
  switch (code) {
    case 'Backspace':
      if (textField.selectionStart > 0) {
        textField.setRangeText(
          '',
          (textField.selectionStart -= 1),
          textField.selectionEnd,
        );
      }
      break;
    case 'Delete':
      textField.setRangeText(
        '',
        textField.selectionStart,
        (textField.selectionEnd += 1),
      );

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
      textField.setRangeText(
        '\n',
        (textField.selectionStart),
        textField.selectionEnd,
'end',
      );
      break;
    default:
      break;
  }
}

function handleUp(e, code) {
   e.preventDefault();
  pressed.delete(code);
  if (code === 'ShiftLeft') {
    isShift = false;
  }
  if (code === 'CapsLock' && capsLock) {
    capsLock = !capsLock;
    Keyboard.removeHighlightKey(code);
  } else if (code === 'CapsLock' && !capsLock) {
    capsLock = !capsLock;
  } else Keyboard.removeHighlightKey(code);
}
document.body.addEventListener('keydown', (e) => {
   handleDown(e, e.code);
});
keyBoardBlock.addEventListener('mousedown', (e) => {
  handleDown(e, e.target.id);
});
document.body.addEventListener('keyup', (e) => {
   handleUp(e, e.code);
});
keyBoardBlock.addEventListener('mouseup', (e) => {
  handleUp(e, e.target.id);
});