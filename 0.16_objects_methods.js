// OBJECT LITERALS WITH METHODS
//Functions inside of an object

var player = {
	//Properties
	name : "",
	life : 100,
	damage : 100,


	//Methods
	challenge : function(){
		console.log(this.name + " says: who tryna get these hands??");
	},
	response : function(){
		console.log(this.name + " says: square up then!");
	},
	shoot : function(){
		console.log(this.name + " shoots miley in the face and does " + this.damage + " damage!");
	},
	death : function(){
		console.log(this.name + " has died");
	},
	loot : function(target){
		console.log(this.name + " loots " + target.name + "'s body and finds 30 gold pieces");
	}
	
};

var melkor = Object.create(player);
melkor.name = "Melkor";

var miley = Object.create(player);
miley.name = "Miley";

//console.log(melkor.name);
//console.log(miley.name);

//Access properties
melkor.challenge();
miley.response();
melkor.shoot();
miley.death();
melkor.loot(miley);