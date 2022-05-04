import './css/style.css';

function createDocumentElement(clas, name) {
   const elem = document.createElement(`${clas}`);
   elem.className = `${name}`;
      return elem;
}
// function bodyAppend(clas,name) {
//    const elem = createDocumentElement(clas, name);
   
// }
const wrapper = createDocumentElement("div", "wrapper");
document.body.appendChild(wrapper);
const board = createDocumentElement("div", "board");
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
const textField = createDocumentElement('textarea', 'text-field');
// textField.setAttribute('type', 'text');
board.appendChild(textField);
const keyBoardBlock = createDocumentElement('div', 'key-board-block');

board.appendChild(keyBoardBlock);


