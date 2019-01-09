

/* ********************************
Variable and Data type */


//This is a string data type
var fistName = 'Jonh';
console.log(firstName);

//This is a number data type
var lastName = 'Smith';
var age = 28;

//This is a boolean data type
var fullAge = true;
console.log(fullAge);

//This is an undefined data type
var job;
console.log(job);

//No longer undefined 
job = 'teacher';
console.log(job);

// This is not valid naming convention: var 3years = 3;

/* ********************************
Variable mutation and type coercion */

var firstName = 'Jonh';
var age = 28;

console.log(firstName + '' + age);
//Age is converted to a string, this is type coercion
//Javascript converts the number to a string. This is known as type coercion. JS will convert the data type as needed.

var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + 'is a' + age + 'years old' + job '.Is he married?' isMarried);

// Variable mutation - Change the value of the variable
age = 'twenty eight';
job = 'driver';

//This creates a pop up window
alert(firstName + 'is a' + age + 'years old' + job '.Is he married?' isMarried);

//Creates a pop up window for input
var lastName = prompt('What is his last Name?');
console.log(firstName + '' + lastName);

/* ********************************
Basic Operators */


var year, yearJonh, yearMark;
year = 2018;
ageJonh = 28;
ageMark = 33;
//Math operators

ageJonh = year - 28;
ageMark = year -33;



console.log(yearJonh);
console.log(year + 2);

//Logical operators 

var jonhOlder = ageJonh > ageMark; //Spits out a boolean, true or false.
console.log(jonhOlder);

// typeof Operator

console.log(typeof jonhOlder); //Spits out "boolean"
console.log(typeof ageJonh);
console.log(typeof 'Mark is older than John'); // Spits out 
var x;
console.log(typeof x); //Spits out "Undefined"



/* ********************************
Operator Precedence */
var year = 2018;
var yearJonh = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = year - yearJonh >= fullAge; // true
console.log(isFullAge);

//Grouping
var ageJonh = now - yearJonh;
var ageMark = 35;
var average = ageJonh + ageMark / 2;
console.log(average);

//Multiple assignments
var x, y; 
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);
// 26 and 26. This works from right to left



/* ********************************
More Operators*/

// x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);

//Increments

x = x + 1;
x += 1;
x++;




/* ********************************
If/Else Statements */

var firstName = 'Jonh';
var civilStatus = 'single';
if (civilStatus === 'married')	//Returns true or false
 {
 	console.log(firstName + 'is married!'); //Is false so nothing returns
}
else (civilStatus === 'single'){
	console.log(firstName + 'single');
}

/* Alternative route */

var isMarried = true;
if (isMarried) {
	console.log(firstName + 'is married!');
}else{
	console.log(firstName + 'will hopefully marry soon :)');

}
