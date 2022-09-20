//Assignment #39 

//Global variable
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//Local variable
function Add_numbers_1(){
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2(){
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//Using console.log to debug
function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2(){
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//Assignment #40
if (1 < 2) { 
    document.write("The left number is smaller than the number on the right.")
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//Else statements
function Age_Function() {
    Age = document.getElementById("Age").ariaValueMax;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enought to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}