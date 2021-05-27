document.getElementById("logIn").onclick = Login;
function Login() {

    userName = "steamledge";
    password = "1234";

    U_login = prompt("ENTER USERNAME TO LOGIN", "use steamledge");
    U_password = prompt("ENTER password TO PROCEED", "use 1234");

// U_logout = prompt("ENTER USERNAME TO LOGOUT", "use steamledge");

    if (U_login === userName) {
        if (U_password === password){
            alert("YOU ARE LOGED IN");
        }
        else {
            alert("WRONG PIN INPUTTED");
        }
    }

}
