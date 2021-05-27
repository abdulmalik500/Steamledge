
// program to check if the string is palindrome or not

document.getElementById("pali").onclick = checkPalindrome;

function checkPalindrome(str) {
        // take input
      var string = prompt('Enter a string: ');  
      // find the length of a string
      var len = string.length;
  
      // loop through half of the string
      for (var i = 0; i < len / 2; i++) {
  
          // check if first and last string are same
          if (string[i] !== string[len - 1 - i]) {
              alert('It is not a palindrome');
          }
          else {
            alert('It is a palindrome');
          }
      }
      
  }

  // call the function
 // var value = checkPalindrome(string);

  // console.log(value);

  
  // In the above The length of the string is calculated using the length property.
  // The for loop is used to iterate up to the half of the string. 
  // The if condition is used to check if the first and the corresponding last characters are the same. 
  // This loop continues till the half of the string.
  // During the iteration, if any character of the string, 
  // when compared with its corresponding last string is not equal, the string is not considered a palindrome.


// extracting the first character
var firstChar = firstName.slice(0, 1);

// extracting the last character
var lastChar = lastChar.slice(text.length - 1);

// looking for an exclamation point
for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === "!") {
        alert("Exclamation point found!");
        break;
    }
}

//The code above converts the number 1234 to the string "1234" and assigns it to the
//variable numberAsString.

var numberAsNumber = 1234;
var numberAsString = numberAsNumber.toString();
