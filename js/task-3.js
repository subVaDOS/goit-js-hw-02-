// function getElementWidth(content, padding, border) {
//   const contentWidth = parseFloat(content);
//   const paddingWidth = parseFloat(padding) * 2;
//   const borderWidth = parseFloat(border) * 2;

//   return contentWidth + paddingWidth + borderWidth;
// }

// // Перевірка коректності роботи
// console.log(getElementWidth('50px', '8px', '4px')); // 74
// console.log(getElementWidth('60px', '12px', '8.5px')); // 101
// console.log(getElementWidth('200px', '0px', '0px')); // 200

//  Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
//  рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
//  то виводь рядок "14 г.", без хвилин.

// function timeToStr(hours, minutes) {
//  if (minutes === 0) {
//      return `${hours} г.`;
//    } else {
//      return `${hours} г. ${minutes} хв.`;
//    }
//  }

// function timeToStr(hours, minutes) {
//   let result;

//   if (minutes === 0) {
//     result = `${hours} г.`;
//   } else {
//     result = `${hours} г. ${minutes} хв.`;
//   }

//   return result;
// }

function timeToStr(hours, minutes) {
  const result = minutes === 0 ? `${hours} г.` : `${hours} г. ${minutes} хв.`;
  return result;
}

const msg1 = timeToStr(14, 00);
const msg2 = timeToStr(12, 12);
const msg3 = timeToStr(17, 11);
const msg4 = timeToStr(13, 15);

console.log(msg1);
console.log(msg2);
console.log(msg3);
console.log(msg4);
