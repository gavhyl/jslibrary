// var firstName= "Gavin Wilson";
// var age = 19;
// var message = firstName + ": " + 19; 


// console.log(typeof message);
// console.log(typeof age);

//quotes?
// var greetings = 'Gavin says "How\'s your day?"';
// console.log(greetings);

// //string methods
// console.log(greetings.length);
// console.log(greetings.toUpperCase());
// console.log(greetings.toLowerCase());

// console.log(greetings.split());
// console.log(greetings.slice(1));

//Challenge: Bronze

//Write a string that has two variables. Output should be something like this: 
//I graduated from TooCoolForSchool High School in 1994.

var highSchool = "TooCoolForSchool";
var gradYear = 2015;
console.log("I graduated from " + highSchool + " in " + gradYear);

//Challenge: Silver

//Create one variable that holds a string that prints out three other variables. The three other //variables should be the make, model, and year of your car.
// “I drive a 1968 Chevy Impala.”

var make = " Chevy";
var model = " Impala";
var year = 1968;
var myCar = year + make + model;
console.log("I drive a " + myCar);

//Challenge: Gold

//Create a variable called age. Give the age a value.
//Use a conditional to check the age.
//If the age is 18, console.log('You are an adult');
//If the age is less than 18, console.log('You are a minor');

 var age = 18;
 if (age===18) {
 	console.log('You are an adult');
 	console.log('true');
 } else {
 	console.log('you are a minor');
 	console.log('false');
 }

