// Author: Jonathan Rodriguez

// Let y be the year (such as 1583 or 2003).
// Divide y by 19 and call the remainder a. Ignore the quotient.
// Divide y by 100 and get a quotient b and remainder c.
// Divide b by 4 and get quotient d and remainder e.
// Divide b + 8 by 25 and get quotient f. Ignore the remainder.
// Divide b - f + 1 by 3 and get quotient g. Ignore the remainder.
// Divide 19 * a + b - d - g + 15 by 30 and get remainder h. Ignore the quotient.
// Divide c by 4 and get quotient i and remainder k.
// Divide 32 + 2 * e + 2 * i - h - k by 7 and get remainder r. Ignore the quotient.
// Divide a + 11 * h + 22 * r by 451 and get quotient m. Ignore the remainder.
// Divide h + r - 7 * m + 114 by 31 and get quotient n and remainder p

 let y = 2004;
console.log ("y is = " + y);

let a = y % 19;
console.log("a is  = " + a)

let b = Math.floor(y / 100);
console.log("b is = " + b)

let c = y % 100;
console.log("c is = " + c)

let d = Math.floor(b / 4);
console.log("d is = " + d)

let e = Math.floor(b % 4);
console.log("e is = " + e)

let f = Math.floor((b + 8) / 25);
console.log("f is = " + f)

let g =  Math.floor((b - f + 1) / 3);
console.log("g is = " + g)

let h = Math.floor((19 * a + b - d - g + 15) % 30) ;
console.log("h is = " + h)

let i = c / 4;
console.log("i is = " + i)

let k = c % 4;
console.log("k is = " + k)

let r =  (32 + 2 * e + 2 * i - h - k) % 7 ;
console.log("r is = " + r)

let m = Math.floor((a + (11 * h) + (22 * r)) / 451);
console.log("m is = " + m)

let n = Math.floor((h + r - 7 * m + 114) / 31);
console.log("n is = " + n)

let p =  (h + r - 7 * m + 114) % 31;
console.log("p is = " + p)

let EasterDate = p + 1
console.log("In " + y + ", Easter falls on " + n + "/" + EasterDate);
