
document.getElementById("userId").onclick = id;
function id() {
// document.getElementById("atm").onclick = money;
// function money() {

db_password = "123";
    //username_pw = "123";

username_pw = prompt("the password is 123", "input password");
    
if (db_password === username_pw) {
    alert("YOU ARE LOGED IN")
    }
    else {
        alert("!!OOPs WRONG PASSWORD INPUTTED");
    }
    
}

document.getElementById("withdraw").onclick = wdr;
function wdr() {

db_amount = 10000;
withdrawal_amount = prompt("YOU HAVE 10,000 LEFT", "enter withdrawal amount");

if (db_amount >= withdrawal_amount)
alert("wait while your withdrawal request is being processed");
else alert("insufficient Balance");
}

document.getElementById("deposit").onclick = dp;
function dp() {

acc_balance = 10000;
deposit = prompt("Enter amount");

// if (db_amount >= withdrawal_amount)
alert(Number.parseFloat(deposit) + acc_balance + " Is Now Your Total Balance");
}



document.getElementById("chk_balance").onclick = chk;
// Total_balance = alert(Number.parseFloat(deposit) + acc_balance + " Is Now Your Total Balance");
function chk() {
    db_password = "123";
    db_amount = 10000;
    username_pw = prompt("Enter account password" + "use 123");

    if (db_password === username_pw)
        alert(db_amount + " Is Now Your Total Balance");
}
// deposit_amount = prompt("INPUT DEPOSIT AMOUNT");
// // depositing code
// Total_balance = alert(Number.parseFloat(deposit_amount) + db_amount + " Is Now Your Total Balance");
// // Nested if statement1

    
