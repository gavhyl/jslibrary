// var footballTeam = "Colts";
// //for (i=0; i <footballTeam.length; i++)
// for (var char in footballTeam) {
// 	console.log(footballTeam[char]);
// }
//create a for in loop that prints each letter of you fav show
// var favShow = "Attack on Titan";
// for (var char in favShow) {
// 	console.log(favShow[char]);
// }

//create a for in loop for your fav food
//then can you count each vowel that occurs in that food?
//1. we need a for in loops
//2. use a conditional to check if the letter at an index is a vowel
vowelCount = 0;
var favFood = "tacos";
for (var char in favFood) {
	if (favFood[char].toLowerCase() === "a" || favFood[char].toLowerCase() === "e" || favFood[char].toLowerCase() === "i" || favFood[char].toLowerCase() === "o" || favFood[char].toLowerCase() === "u") {}
		vowelCount++;
}
console.log("there are " + vowelCount + " vowels in " + favFood);