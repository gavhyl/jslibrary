//indexing starts at 0
//to acces the index we us [] and the index number inside them
//dry - dont repeat yourself
//wet - write everything
 var name = "gav";
// console.log(name.length);
// console.log(name[0].toUpperCase() + name[1] + name[2]);
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);

// var lcv = 0; //this is a loop control variable
// while(lcv < 5) {
// 	console.log(name.toUpperCase());
// 	lcv += 1;//THIS IS CRITICAL! NO VAR LEADS TO INFINITY
// }

// //create a while loop that starts at 0 and ends at 10
// //this while loop should print each number of the lcv
// //make your lcv var count = 0

// var count = 0;
// while(count < 10) {
// 	console.log(count);
// 	count++;
// }

// var num = 10;
// while(num > 0){
// 	console.log(num);
// 	num--;
// }

// var evenCount = 0;
// while(evenCount < 20){
// 	if (evenCount % 2 === 0){
// 		console.log(evenCount + " is even");
// 	} else {
// 		console.log(evenCount + " is odd");
// 	}
// 	evenCount++;
// }

//create a while loop that will count to 50 by 5s
//use the lcv variable of countFive

var countFive = 0;
while(countFive <= 50){
	console.log(countFive);
	countFive += 5;
}