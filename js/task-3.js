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

// function timeToStr(hours, minutes) {
//   const result = minutes === 0 ? `${hours} г.` : `${hours} г. ${minutes} хв.`;
//   return result;
// }

// const msg1 = timeToStr(14, 00);
// const msg2 = timeToStr(12, 12);
// const msg3 = timeToStr(17, 11);
// const msg4 = timeToStr(13, 15);

// console.log(msg1);
// console.log(msg2);
// console.log(msg3);
// console.log(msg4);

// const fullName = 'Jacob Mercer';
// console.log(fullName.slice(0, 4)); // 'Jaco'
// console.log(fullName.slice(3, 9)); // 'ob Mer'
// console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'
// console.log(fullName.slice(0)); // 'Jacob Mercer'
// console.log(fullName.slice()); // 'Jacob Mercer'

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('Overmorrow');
// } else {
//   console.log('Date in the future');
// }

// function createReversedArray(...args) {
//   return args.toReversed();
// }

// console.log(createReversedArray(12, 85, 37, 4)); // [4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291)); // [291, 48, 164]
// console.log(createReversedArray(412, 371, 94, 63, 176)); // [176, 63, 94, 371, 412]
// console.log(createReversedArray()); // []
// console.log(createReversedArray(1)); // [1]

function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();

  return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('Amazing SalE, only tonight!'));
console.log(checkForSpam('Trust me, this is not a spam message'));
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));
