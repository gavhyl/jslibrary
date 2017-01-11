var isOn = true;
var isHot = false;

//1
if (isOn === true){
	console.log("this light is on. its too bright, bro.");
}

if (isOn){
	console.log("Dude, turn that music off.");
}

// && = and
if (isOn && isHot){
	console.log("Dude, that music on, and its fire.");
}

// || = or

if (isOn || isHot){
	console.log("Dude, that music is on, it's loud, and it is NOT hot.");
}

// ! = not

if (!isHot){
	console.log("It is not.");
}