// var nameOne = "paul";
// var nameTwo = "gavin";
// var nameThree = "verne";
// var nameFour = "lisa";
// var nameFive = "kenn";
//this is how you create an array is js
// var names = ["paul", "gavin", "verne", "lisa", "kenn"];
// var nums = [1, 2, 3, 4, 5, 6];
// var mixed = ["dog", 11, true, "blue", 78];
// // console.log(names[2]);
// // console.log(nums[4]);
// // console.log(mixed[3]);
// //can we use a for in loop to iterate and console log each name in names
// for (var name in names){
// 	console.log(names[name]);
//}
// create an array of your fav candy bars
var bars = ["reese", "hersheys", "3 musketeers", "kit-kat", "milky way"];
console.log(bars[0]);
bars.push("SPK");
console.log(bars);
bars.pop([3]);
console.log(bars);

//hw to remove a specific element from any array
//console.log(blah.indexOf())
//console.log(blah.slice())

//.push will add a new value to the end of the array
favCandy.push("Peanut Butter Cups");
console.log(favCandy);
//.pop will remove a value found at the end of the array
favCandy.pop();
console.log(favCandy);
console.log("------------------");
//.slice does not change the actual array but will only return the values up to the last number
console.log(favCandy.slice(0,3));
console.log(favCandy);
console.log("----------------------");

//how to remove a specific element of an array
//.indexOf will return the index of where a value is located in the array
console.log(favCandy.indexOf("SPK"));
//.splice will allow us to remove the item from the array 	
favCandy.splice(0,1);
console.log(favCandy);