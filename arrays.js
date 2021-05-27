var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los Angeles";
var city5 = "Seattle";

var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
alert("Welcome to " + cities[3]);

var pets = [];

pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";
pets[3] = "lizard";
pets[4] = "fish";
pets[5] = "gerbil";
pets[6] = "snake";

//to remove the last element we use the pop() method
pets.pop(); //opposite of shift()

// to add one or more elements to end of an array we use the push()
pets.push("fish", "ram"); // opposit of unshift()

// to remove an element from the beginning of an array use the shift()method
pets.shift(); // opposit of pop()

// to add elements to the biggining of an array use unshift() method
pets.unshift("dog", "cat"); // opposite of push()

// use the splice() method to add one or more elements any where in array
pets.splice(2, 2, "lion", "lioness"); 
pets.splice(2, 0, "ox", "bug"); //adds without removing any elements
pets.splice(2, 2); // removes elemets without adding any

// use the slice() method to remove elements from array x to array y
var pets = ["dog", "cat", "moon", "sun"];
var notpets = pets.slice(2, 3);
