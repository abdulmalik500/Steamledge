/**
The price of the item is $9.95. The sales tax is 6.5% of the price. You combine the two
numbers to get the total.

 */
var price = "$9.95";
var taxRate = "6.5%";
var total = price + (price * taxRate);
var prettyTotal = total.toFixed(2);
//var prettyTotal = total.toFixed(); // shorten to noe decimals
var currencyTotal = "$" + prettyTotal;

// easy way to round .5 decimal numbers
var str = num.toString();
    if (str.charAt(str.length - 1) === "5") {
        str = str.slice(0, str.length - 1) + "6";
    }
num = Number(str);
prettyNum = num.toFixed(2);
