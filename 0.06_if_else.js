// if/else

// var elevatorUp = true;
// var elevatorDown = true;
// var elevatorOpen = true;
// var elevatorBroken = true;
// var elevatorStuckAndWeAreOnIt = true;
// var elevatorNumber = 13;

// if (elevatorUp === true){
// 	console.log("Going up");
// } else{
// 	console.log("Going down");
// }

// if (elevatorBroken === true){
// 	console.log("That sucks, guess you walkin");
// }

//CHALLENGE: Bronze

//WRITE YOUR OWN CONDITIONAL USING BOOLEANS AND LOGICAL OPERATORS.
//Come up with a simple example

var tacosAreGood = true;
var tacosAreBad = false;

if (tacosAreGood === true){
	console.log("You damn right!");
} else {
	console.log("They still good tho");
}

//Challenge: Silver
//Create a simple login console message.
// create 2 variables 1 for your users firstName, 2 for the boolean condition
// If login is true then print "You're Logged In!"
//Else if login is false then print "Please Sign In"

var firstName = "Gavin";
var login = true;

if (login === true){
	console.log("You're Logged In " + firstName);
}


//CHALLEGE: Gold
//Set up a var with bankAccount and a var with debt.
//Also set up a difference var.
//Do some logic to show whether or not you will pay off your debt or prints out a message if you have extra money.

var bankAccount = 200;
var debt = 300;
var difference = 100;

if (bankAccount > debt){
	console.log("Your remaining balance is " + difference);
} else {
	console.log("You owe an extra " + (debt - bankAccount));
}