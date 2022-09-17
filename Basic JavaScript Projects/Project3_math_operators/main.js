function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function sutraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("math").innerHTML = "5 - 2 =" + Subtraction;
}

function multiplication () {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 =" + simple_Math;
}

function division () {
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 =" + simple_Math;
}

function more_Math() { 
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}


//need a modulus operator for assignment #20

function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

var X = 5;
X++;
document.write(X);

//would result in an increment from 5 to 6 

var Z = 5.25;
Z--;
document.write(X);

//would result in "4.25"

window.alert(Math.random());//would result in a random number between 0 and 1 

window.alert(Math.random() * 100); //would result in a random number between any 2... in this example, 0 and 100

