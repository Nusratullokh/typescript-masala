"use strict";
// 1-MASALA
// function calculateAges(humanYears: number): [number, number, number] {
//     let catYears: number;
//     let dogYears: number;
//     if (humanYears === 1) {
//         catYears = 15;
//         dogYears = 15;
//     } else if (humanYears === 2) {
//         catYears = 24; // 15 + 9
//         dogYears = 24; // 15 + 9
//     } else {
//         catYears = 24 + (humanYears - 2) * 4;
//         dogYears = 24 + (humanYears - 2) * 5;
//     }
//     return [humanYears, catYears, dogYears];
// }
// // Misol uchun foydalanish:const ages = calculateAges(5);
// console.log(calculateAges); // Natija: [5, 36, 39]
// 2-MASALA
// function getWeekday(num: number): string {
//     switch (num) {
//         case 1:
//             return"Sunday";
//         case 2:
//             return"Monday";
//         case 3:
//             return"Tuesday";
//         case 4:
//             return"Wednesday";
//         case 5:
//             return"Thursday";
//         case 6:
//             return"Friday";
//         case 7:
//             return"Saturday";
//         default:
//             return"Wrong, please enter a number between 1 and 7";
//     }
// }
// console.log(getWeekday(3)); 
// 3-MASALA
// function maxExpressionValue(a: number, b: number, c: number): number {
//     const expressions = [
//         a * (b + c), 
//         a * b * c ,
//         a + b * c ,
//         (a + b) * c,
//     ];
//     return Math.max(...expressions);
// }
// console.log(maxExpressionValue(10, 24, 3)); 
// 4-MASALA
// function calculateValue(input: any): string | number {
//     if (typeof input === "string") {
//         return"Xato";
//     }
//     return input * 50 + 6;
// }
// console.log(calculateValue(4));    console.log(calculateValue("4")); 
// 5-MASALA
// function doubleChar(str: string): string {
//     return str.split('').map(char => char + char).join('');
// }
// console.log(doubleChar("Hello"));
// console.log(doubleChar("1234!")); 
// 6-MASALA
// function dnaToRna(dna: string): string {
//     return dna.replace(/T/g, 'U');
// }
// console.log(dnaToRna("GATTACA")); 
// console.log(dnaToRna("TTTT"));    
// 7-MASALA
// function updateLight(current: string): string {
//     switch (current) {
//         case'green':
//             return'yellow';
//         case'yellow':
//             return'red';
//         case'red':
//             return'green';
//         default:
//             throw new Error('Invalid traffic light state');
//     }
// }
// console.log(updateLight('green'));  
// console.log(updateLight('yellow')); 
// console.log(updateLight('red'));    
// 8-MASALA
// function shortLongShort(a: string, b: string): string {
//     if (a.length < b.length) {
//         return a + b + a;
//     } else {
//         return b + a + b;
//     }
// }
// console.log(shortLongShort("33", "22"));     
// console.log(shortLongShort("22", "1"));     
// console.log(shortLongShort("hello", "hi")); 
// console.log(shortLongShort("abc", "defgh"));
