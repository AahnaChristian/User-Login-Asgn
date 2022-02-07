// User Login Assignment

// Variables for HTML Elements
let loginBtnEl = document.getElementById("login-btn");
let UserInEl = document.getElementById("userIn");
let PassInEl = document.getElementById("passIn");

// Event Listener
loginBtnEl.addEventListener("click", Login);

// Event Function
function Login() {
    // Input
    let userInput = UserInEl.value;
    let passInput = PassInEl.value;

    // Process
    if (userInput === "admin" && passInput === "1234") {
        alert("Login Successful!");
    } else if (userInput === "admin" && passInput !== "1234") {
        alert("Invalid Password");
    } else if (passInput === "1234" && userInput !== "admin") {
        alert("Invalid Username");
    } else {
        alert("Login Failure, Inavlid Username & Password!");
    }
}