/***
create a simple regsiter login logout process
create a simple calculator (BODMAS)
create a simple ATM program: rigister, withdraw, fund, check balance

second task

1- at =[1,2,3,4,5,6,7,8,9];
   targeNum int 10
2- palindrome: how check a given number or text is a palindrome or not
3- convert any given int to roman number


 **/


 document.getElementById("multiply").onclick = MULT;
 function MULT() {
 // multiplication
    alert("This is a multiplication prompt");

    var fnum = prompt("Enter first number you want to multiply");
    var snum = prompt("Enter a second number you want to multiply");

    alert(fnum * snum + " IS THE ANSWER");
 }
// addition
document.getElementById("add").onclick = ADD;
function ADD() {
    alert("This is an addition prompt");
    var sumnum1 = prompt("Enter first number you want to add");
    var sumnum2 = prompt("Enter a second number you want to add");
    alert(Number.parseFloat(sumnum1) + Number.parseFloat(sumnum2) + " IS THE ANSWER");
}

document.getElementById("minus").onclick = SUBT;
function SUBT() {
// subtraction
    alert("This is a subtraction prompt");
    var sub1 = prompt("Enter first number");
    var sub2 = prompt("Enter a second number");
    alert(Number.parseFloat(sub1) - Number.parseFloat(sub2) + " IS THE ANSWER");
}

document.getElementById("divide").onclick = DIV;
function DIV() {
// DIVISION
    alert("This is a division prompt");
    var dv1 = prompt("Enter the Numerator");
    var dv2 = prompt("Enter the Dinominator");
    alert(Number.parseFloat(dv1) / Number.parseFloat(dv2) + " IS THE ANSWER");
}

