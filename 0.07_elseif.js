// var age = 25;

// if (age >= 21){
// 	console.log("Shots!");
// } if (age >= 18){
// 	console.log("You can vote");
// } if (age >= 25){
// 	console.log("You can rent a car");
// }


// else {
// 	console.log("No shots for you");
// }

//CHALLENGE: BRONZE
//expand upon our a simple login.
// create 2 variables 1 for your users username, 2 for the boolean condition then another to check if the user is an admin
// If login is true then print "You're Logged In!"
// If login is true and the user is a admin, print "This is the dashboard for your employee records you have master control"
// If Login is true and the user is a manager, print "This is the dashboard for your employee records, you can only read but not create users"
// If login is true and the user is a employee, print "clock in and clockout please" 
//Else if login is false then print "Please Sign In"

// var userName = "gavhyl";
// var login = false;
// var admin = false;
// var manager = false;
// var employee = false;

// if (login === true){
// 	console.log("Logged in");
// } if (login === true && admin === true){
// 	console.log("This is the dashboard for your employee records, you have master control");
// } if (login === true && manager === true){
// 	console.log("This is the dashboard for employee records, you can only view but not create users");
// } if (login === true && employee === true){
// 	console.log("clock in and clockout please");
// } else {
// 	console.log("please sign in");
// }



//CHALLENGE: SILVER
/*
Create an if statement that has several conditions.
 Pretend that we will play four total games next year against the patriots.
 Deal with the Patriots record versus our record In other words, if our record was better, 
 talk some smack. If not, you should still talk some smack, but in 
 a different way. If the records were the same, talk some smack. 
 
 */


 Colts = 4;
 Patriots = 0;
 lockout = 0; 

 if (Colts > Patriots){
 	Colts -= Patriots;
 	console.log("The Colts are way better than the Patriots!!");
 }
else if (Patriots > Colts){ 
 		console.log("We'll get them next year!!");
} 
else if (Colts == Patriots){
 		console.log("We'll take it.");
} 
else if (lockout){
	console.log("I guess nobody can ever know what would have happened");
}

// CHALLENGE: GOLD

// 1. Write a program that prompts your users in the browser to enter a
// number from 1 to 5 about how optimistic they are about the Colts next year.
// 2. Have a different response for each number.

// *HINT*
//  you have to build this in relp.it 
// Research prompt

var colts = Number(prompt("Please rate how optimistic you are about how Colts will do this year", "0"));

if (colts === 5 && colts === 4){
  alert("Love the optimism!!!");
} else if (colts === 3 && colts === 2){
  alert("Come on get more excited!!");
} else {
  alert("You should not even be a Colts fan");


