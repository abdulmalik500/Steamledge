// REPLACING STRINGS
var newText = text.replace("World War II", "the Second World War"); 
//The first string inside the parentheses is the segment to be replaced. The second string is
//the segment to be inserted.
var newText = text.replace(/World War II/g, "the Second World War"); //global replacement

//Rounding numbers
var numberOfStars = Math.round(scoreAvg);
//To force JavaScript to round up to the nearest integer, no matter how small the fraction
var scoreAvg = Math.ceil(.000001);
//Generating random numbers pseudo-random
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);
Math.max(1,2,3,56); // returns the highest number in an array

//methods on it like charAt(), indexOf(), or slice().

// The following code converts the string "24" to the number 24.
var integerString = "24"
var num = Number(integerString);

// The following code converts the number 1234 to the number string.
var numberAsNumber = 1234;
var numberAsString = numberAsNumber.toString();
var myInteger = parseInt("1.9999");
var myFractional = parseFloat("1.9999");

/**
The price of the item is $9.95. The sales tax is 6.5% of the price. You combine the two
numbers to get the total. 
 */
var total = price + (price * taxRate);
var prettyTotal = total.toFixed(2);


var str = num.toString();
if (str.charAt(str.length - 1) === "5") {  //checks to see if the last charAt is 5
    str = str.slice(0, str.length - 1) + "6"; // if so slices it and appends 6
}
num = Number(str);
prettyNum = num.toFixed(2);