// Author: Jonathan Rodriguez

let readline = require('readline-sync');

console.log('*************************************************************************');

console.log('WeLcOmE TO thE ChAnGe MaChIne!!');

let cents = Number(readline.question ('Please Enter cents as a positive integer'));

console.log(cents + ' Cents Makes');

let quarters = Math.floor(cents / 25);

cents = cents % 25;

let dimes = Math.floor(cents / 10);

cents = cents % 10;

let nickles = Math.floor(cents / 5);

cents = cents % 5;

let pennies = Math.floor(cents / 1);

cents = cents % 1;

console.log('Quarters ' + quarters);
console.log('Dimes ' + dimes);
console.log('Nickles ' + nickles);
console.log('Pennies ' + pennies);
console.log('hOpE yOu ArE sAtisFied wItH YoUR rEsulTS');
console.log('HAVE A GOOD DAY GOODBYE');
console.log('*************************************************************************')
