export default function createKeyBoard(language) {
   const INGLICH = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
      'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del',
      'caps<br>lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
      'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593', 'shift',
   'ctrl', 'alt', '', 'alt', 'ctrl', '&#8592', '&#8595', '&#8594', 'us'];
   const KIRIL = ['а', 'б', 'в', 'г'];
   const arrayKeys = [];
   if (language === 'english') {
      for (let i = 0; i < INGLICH.length; i++) {
         const temp = document.createElement('span');
         temp.innerHTML = INGLICH[i];
         if (i === 41 || i === 54) {
            temp.id = 'wide';
         }
         if (i === 57) {
           temp.id = 'space';
         }
         arrayKeys.push(temp);
      }
   } else {
      KIRIL.forEach((elem) => {
        const temp = document.createElement('span');
        temp.innerHTML = elem;
        arrayKeys.push(temp);
      });
   }

   return arrayKeys;
}
