//Closures

//1. A closure gives you access to the variables set in a function
//   after the function has completed and returned
//2. Helps keep variables from being pushed into the global scope.
//3. Degree of protection. Variable can't be overwritten.

var gav = {};

var setAge = function(myAge) {

	var birthday = "5/19/1997";
	return {
		getAge: function(){
			return myAge;
		},

		getBirthday: function(){
			return birthday;
		}
	};
};
gav.age = setAge(19);
console.log(gav.age.getAge());
console.log(gav.age.birthday);
console.log(gav.age.getBirthday());