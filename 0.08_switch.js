/*
switch Casesswitch(expression) {
	case n:
		code block
		break;
	case n:
		code block
		break;
	default:
		default code block
}
*/

var marginOfColtSuperBowlWins = 17;
var result;

switch (marginOfColtSuperBowlWins){
	case 3:
		result = "Cool, that will be a good game";
		break;
	case 7:
		result = "I like it, just close enough";
		break;
	case 10:
		result = "That's what I'm talking about";
		break;
	case 17:
		result = "Sweet we're awesome";
		break;
	default:
		result = "mhm getting there";
}
console.log("Switch Result: " + result);