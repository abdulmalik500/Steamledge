document.getElementById("logOut").onclick = Logout;
function Logout() {


userName = "steamledge";
password = "1234";
U_logout = prompt("ENTER USERNAME TO LOGOUT", "use steamledge");
U_password = prompt("ENTER password TO PROCEED", "use 1234");


    if (U_logout === userName) {
        if (U_password === password) {
            alert("YOU ARE LOGED OUT"); 
        }
        else {
            alert("WRONG PIN INPUTTED")
        }
    }
    
}