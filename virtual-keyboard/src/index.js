import './css/style.css';
import Keyboard from './modules/keyboard';

let isEnglish = (
  window.sessionStorage.getItem('isEnglish')
) === 'true';
let capsLock = false;
const pressed = new Set();
const pairOfkeys = ['AltLeft', 'ShiftLeft'];
// const pairOfkeysPrint = ['ShiftLeft', 'KeyE'];
let isShift = false;
let keyBoardBlock;
let textField;

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
   const languages = createDocumentElement('span', 'language');
   languages.textContent = 'English';
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
console.log(isShift);
function handleDown(e, code) {
  e.preventDefault();
  Keyboard.highlightKey(code);
  function checkConditions() {
    if (Keyboard.isPrintKey(code)) {
      if (code === 'Space') textField.textContent += ' ';
      else if (code === 'Tab') textField.textContent += '  ';
      else if (!capsLock) textField.textContent += keyboard.getSimbolKey(code);
      else {
        textField.textContent += keyboard.getSimbolKey(code).toUpperCase();
      }
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
        textField.textContent += keyboard.getSimbolKey(code);
      } else {
        textField.textContent += keyboard.getSimbolKey(code).toUpperCase();
      }
    }
  } else checkConditions();
  function changeLanguage() {
    pressed.add(code);
    /* eslint-disable-next-line */
    for (const key of pairOfkeys) {
      if (!pressed.has(key)) return;
    }
    pressed.clear();
    arrayKeys = isEnglish ? keyboard.create('kir') : keyboard.create('eng');
    isEnglish = !isEnglish;
    window.sessionStorage.setItem('isEnglish', isEnglish);
    keyBoardBlock.innerHTML = '';
    arrayKeys.forEach((elem) => {
      keyBoardBlock.appendChild(elem);
    });
  }
  changeLanguage(e);
  //  shift + keyPrint
  // function outUpperCase() {
  //   pressed.add(code);
  //   /* eslint-disable-next-line */
  //   for (const key of pairOfkeysPrint) {
  //     if (!pressed.has(key)) return;
  //   }
  //   pressed.clear();
  //   textField.textContent += keyboard.getSimbolKey(pairOfkeysPrint[1]).toUpperCase();
  // }

  // end
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