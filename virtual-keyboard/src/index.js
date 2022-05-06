import './css/style.css';
import Keyboard from './modules/keyboard';

let isEnglish = true;
const pressed = new Set();
const pairOfkeys = ['AltLeft', 'ShiftLeft'];

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
let arrayKeys = keyboard.create('eng');
console.log(`create: ${arrayKeys}`);
arrayKeys.forEach((elem) => {
   keyBoardBlock.appendChild(elem);
});

function handleDown(e, code) {
   e.preventDefault();
   console.log(e);
   function changeLanguage() {
     pressed.add(code);
     /* eslint-disable-next-line */
     for (const key of pairOfkeys) {
       if (!pressed.has(key)) return;
     }
     pressed.clear();
     arrayKeys = isEnglish ? keyboard.create('kir') : keyboard.create('eng');
     isEnglish = !isEnglish;
     keyBoardBlock.innerHTML = '';

     arrayKeys.forEach((elem) => {
       keyBoardBlock.appendChild(elem);
     });
     console.log(`change${arrayKeys}`);
   }
   changeLanguage(e);
   Keyboard.highlightKey(code);
   if (Keyboard.isPrintKey(code)) {
     if (code === 'Space') textField.textContent += ' ';
     else if (code === 'Tab') textField.textContent += '  ';
     else textField.textContent += keyboard.getSimbolKey(code);
   }
   }

function handleUp(e, code) {
   e.preventDefault();
   pressed.delete(code);
   Keyboard.removeHighlightKey(code);
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