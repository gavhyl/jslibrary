//JSON is an acronym for Javascript Object Notation
//
var names = [["James", "Paul", "Cameron", "Chris"], ["Morgan", "Julie", "Abbey", "Brie"]];
//console.log(names[0][3]);
var items = [
	{
		"id": 1,
		"name": "Green Door",
		"price": 12.50,
		"tags": ["home", "green", "vinyl"]
	},
	{
		"id": 2,
		"name": "Red Door",
		"price": 12.50,
		"tags": ["home", "red", "cheap wood"]
	}
];
//console.log(items[0].id);
//console.log(items[1].tags[1]);

for (i=0; i < items.length; i++){
	console.log(items[i].name);
}