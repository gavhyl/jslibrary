// function hello() {
// 	console.log("hellow world");
// }

//hello();
//making a function with greeting
// function greeting(name) {
// 	console.log("Good morning, " + name);
// }

// greeting("Kenn");


// //adding numbers to functions

// function prinNumber(){
// 	console.log(1);
// }

// prinNumber();

// function sumNum(){
// 	var num1 = 4;
// 	var num2 = 6;
// 	console.log(num2 + num1);
// }

// sumNum();

 // function divNum(num1, num2){

 // 	console.log(num2 / num1);
 // }

 // divNum(5, 10);

 // function subNum(num1, num2){

 // 	console.log(num2 - num1);
 // }

 // subNum(7, 8);

//  function calculatesPriceInidana(quantity, price){
//  	var tax = 0.07;
//  	var totalTax = quantity * price * tax;
//  	var totalPrice = totalTax + quantity * price;

//  	return totalPrice;
//  }

//  console.log(calculatesPriceInidana(17, 5));

//  function fieldGoalPercent(shotsTaken, shotsMade){
//  	var fgPerc = shotsMade / shotsTaken;
//  	return fgPerc;
//  }

//  console.log(fieldGoalPercent(67, 32));

// // built in functions example
//  var today = new Date();
//  console.log(today.toDatestring());

//  function checkOdd(num){
//  	if (num % 2 ===0){
//  		return "Even";
//  	} else {
//  		return "odd";
//  	}
//  }
// console.log(checkOdd(12));

// function divByThree(num){
// 	if (num % 3 ===0){
// 		return "true";
// 	} else {
// 		return "false";
// 	}
// }
// console.log(divByThree(15));

// function greeting(name){
// 	if (name == "Gavin"){
// 		return "You're awesome";
// 	} else if (name == "Kenn"){
// 		return "You teachin these functions";
// 	} else {
// 		return "Blah";
// 	}
// }
// console.log(greeting("Gavin"));



// 1. Write a function with two strings as parameters.
// 		The function should concatenate the string.

function greeting(part1, part2){
	 console.log(part1 + part2);
}
greeting("Gavin", " really likes tacos");

// 2. Write a function that will help me easily calculate monthly bills.

function monthlyBills(expense1, expense2){
	var monthlyCost = expense1 + expense2;
	return "Your cost for your monthly bills is " + monthlyCost;
}
console.log(monthlyBills(85, 75));

// 3. Write a function that takes quantity, price, tax and an item
// The function should take the quantity, price, tax and the item name and return
// a response similar to this.
// --150 hotdogs will cost you $145 (your math may not be perfect and may
//  potentially return 145.457.  If that is the case, don’t sweat it.

function reeseCups(quantity, price){
	var tax = 0.07;
	var reeseCupCost = (quantity * price) - (quantity * price* tax);
	return quantity + " reese cups " + "will cost you " + reeseCupCost;
}
console.log(reeseCups(15, 3));
