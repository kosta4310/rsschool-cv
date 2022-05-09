import Key from './key';

const array = {
   codeArray: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5',
      'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
      'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
      'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG',
      'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft',
      'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
      'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Language'],
   kiril: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
      'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del',
      'caps<br>lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
      'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593', 'shift',
      'ctrl', 'alt', '', 'alt', 'ctrl', '&#8592', '&#8595', '&#8594', 'ru'],
   kirilShift: [false, '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', false,
      false, false, false, false, false, false, false, false, false, false, false, false, false, '/', false,
      false, false, false, false, false, false, false, false, false, false, false, false, false,
      false, false, false, false, false, false, false, false, false, false, ',', false, false,
      false, false, false, false, false, false, false, false, false],
   english: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
         'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del',
         'caps<br>lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
         'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593', 'shift',
      'ctrl', 'alt', '', 'alt', 'ctrl', '&#8592', '&#8595', '&#8594', 'us'],
   engShift: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', false,
      false, false, false, false, false, false, false, false, false, false, false, '{', '}', '|',
      false, false, false, false, false, false, false, false, false, false, false, ':', '"', false,
      false, false, false, false, false, false, false, false, '<', '>', '?', false, false,
      false, false, false, false, false, false, false, false, false],
   printKey: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5',
      'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal',
       'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
      'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG',
      'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',
      'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash',
        'Space'],
};

export default class Keyboard {
  arrayKeys = [];

   language = '';

   arrayInstance = [];

  constructor() {
     this.kiril = array.kiril;
     this.english = array.english;
     this.codeArray = array.codeArray;
     this.kirilShift = array.kirilShift;
     this.engShift = array.engShift;
      }

   create(language) {
      this.language = language;
      this.arrayKeys = [];
    for (let i = 0; i < this.codeArray.length; i++) {
      const temp = new Key(this.codeArray[i], this.kiril[i], this.english[i], this.kirilShift[i], this.engShift[i]);
      this.arrayInstance.push(temp);
      const elem = temp.createKey(this.language);
      elem.id = this.codeArray[i];
      if (i === 57) elem.classList.add('space');
      if (this.language === 'kir' && i === 28) elem.dataset.kiril = 'true';
      if (this.language === 'kir' && i === 57) elem.classList.add('space');
      this.arrayKeys.push(elem);
    }
    return this.arrayKeys;
  }

   getSimbolKey(code, isShift) {
      const index = this.codeArray.indexOf(code);
      let simbol;
      if (code === 'Tab') {
         simbol = '    ';
      } else if (code === 'Space') {
         simbol = ' ';
      } else if (this.language === 'eng') {
            if (isShift) {
              simbol = this.engShift[index]
                ? this.engShift[index]
                : this.english[index];
            } else { simbol = this.english[index]; }
      } else if (isShift) {
            simbol = this.kirilShift[index] ? this.kirilShift[index] : this.kiril[index];
      } else {
         simbol = this.kiril[index];
         }
      return simbol;
  }

   static highlightKey(code) {
      const elem = document.querySelector(`#${code}`);
      elem.classList.add('active');
   }

   static removeHighlightKey(code) {
      const elem = document.querySelector(`#${code}`);
      elem.classList.remove('active');
   }

   static isPrintKey(code) {
      return array.printKey.includes(code);
   }
}
