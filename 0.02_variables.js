/*//this is a variable string type
var firstname="gav";
var lastname="wil";

//concatenation- build and combine strings
var fullname=firstname + " " + lastname;
console.log(fullname);

//empty variables
var num;
num = 2;
console.log(num);

// empty strings
var petsName= "";

petsName = "django";
console.log(petsName);

//conventional variable namings
var coltsScoreThisWeekend =12;

//snake case - each word is followed by a hashtag
var colts_score_from_last_weekend= 30;

//let variables
if (true){
	let petsName = ""
}*/

//short hand operators
var age = 19;
//console.log(1 += 1); //1= 1+1
//console.log(age += 1); //age = age + 1
//console.log(age /= 2);
console.log(age *= 2 );

//Do not declare variables like this
//var 2nite = "Wednesday Night"

/*
CHALLENGE: Bronze
Come up with five different variables. Think of 
real world uses for integers and create variables based on 
those things. A few examples might include: 
*/

// var points= 150;
// var rebounds= 85;
// var assists= 120;
// var shotsTaken= 100;
// var shotsAttempted= 165;

//CHALLENGE: Silver
// Make a var called myNumber
//Set it to 0.
//Use shorthand to add 10 to it.
//Then use shorthand to subtract 1.
//Use shorthand to multiply by 9.
//Use shorthand to divide by 7.
//Just for practice, print myNumber to the console between each operation.
/*************************************************************
	 Operator ***** Example ***** Equivalent *****
    	+=		|    a += b   |    a = a + b   | 
    	-=		|    a -= b   |    a = a - b   | 
    	*=		|    a *= b   |    a = a * b   | 
    	/=		|    a /= b   |    a = a / b   | 
    	%=		|    a %= b   |    a = a % b   |   
              *****         *****            *****
*************************************************************/

// var myNumber= 0;
// console.log(myNumber += 10);
// console.log(myNumber -= 1);
// console.log(myNumber *= 9);
// console.log(myNumber /= 7);

//CHALLENGE: Gold
//Challenge #3 - Lifetime Supply
// Ever wonder how much 


//a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount of glasses of water per day (as a number).
// Calculate how many glasses of water you would need for the rest of your life.
// Output the result to the screen like so: "You will need 5 million glasses to last you until the ripe old age of X".

var currentAge= 19;
var maxAge= 100;
var glassesADay= 5;
console.log("You will need " + (maxAge - currentAge)*(365*glassesADay) + " glasses until the ripe old age of "+ maxAge );

