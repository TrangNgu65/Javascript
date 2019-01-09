
/* ********************************
Coding Challenge 1*/

var jonhWeight, markWeight, jonhHeight, markHeight, bmiCountJonh, bmiCountMark;
jonhWeight = 150;
markWeight = 130;
jonhHeight = 80;
markHeight = 90;
bmiCountJonh = 0;
bmiCountMark = 0;

var bmiCountJonh = jonhWeight / (jonhHeight * jonhHeight);
var bmiCountMark = markWeight / (markHeight * markHeight);

console.log(bmiCountJonh);
console.log(bmiCountMark);

/*
var jonhBmiCount = bmiCountJonh > bmiCountMark;
console.log(jonhBmiCount);

var MarkBmiCount = bmiCountMark > bmiCountJonh;
console.log(MarkBmiCount);

console.log('Is Marks BMI higher than Jonhs?' + MarkBmiCount);
*/

if(bmiCountJonh > bmiCountMark) {
console.log('Mark\' BMI is higher than Jonhs\'s.');
} else {
console.log('Jonh\' BMI is higher than Mark\'s.');
}