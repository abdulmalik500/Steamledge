// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }

// var numOfElements = cleanestCities.length; // determine the number of elements
// var matchfound = false; // this is a flag
// for (var i = 0; i < numOfArrays; i++)
//     if (cityToCheck === cleanestCities[i]) {
//     matchfound = true;
//     alert("It's one of the cleanest cities");
//     break; // limiting number loops
//     }
// if (matchfound === false) {
//     alert("It's not on the list");
// }

// // FOR LOOP NESTED STATEMENTS
// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }

document.getElementById("messageButton").onclick = Code;
function Code() {
    var cityToCheck = prompt("Enter your city");
    cityToCheck = cityToCheck.toLowerCase(); // CHANGING CASE or .toUpperCase()
    var cleanestCities = ["cheyenne", "santa fe", "kano", "great falls", "honolulu"];
    var firstChar = cityToCheck.slice(0, 1);
    var otherChars = cityToCheck.slice(1);
    firstChar = firstChar.toUpperCase();
    otherChars = otherChars.toLowerCase();
    var cappedCity = firstChar + otherChars;

    for (var i = 0; i <= 4; i++) {
        if (cityToCheck === cleanestCities[i]) {
        alert("It's one of the cleanest cities");
        }
    }

}

 
var text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was"
var firstChar = text.indexOf("World War II"); //word for finding the index of the firstchar of a segment
var lastchar = text.lastIndexOf("R"); //word for finding the index of the lastchar of a segment
/**
 * Code the first line of an if statement that tests 
 * whether a 3-character slice at the beginning of a 
 * string represented by one variable can be found 
 * somewhere within a string represented by a second variable.
 */
if (var2.indexOf(var1.slice(0, 3)) !== -1) {}

if (firstChar !== -1) {
for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
    }
}
}



// var str = prompt("Enter Some Text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2) === " ") {
//         alert("No double space !");
//         break;
//     }
// }

var animals = ["goat", "cat", "crow"];
var products = ["milk", "cheese", "burger"];
var foodItems = [];
var k = 0;

for (var i = 0; i < animals.length; i++) {
    for (var j = 0; j < products.length; j++) {
      foodItems[k] = animals[i] + products[j];
      k++;
    }
  }


