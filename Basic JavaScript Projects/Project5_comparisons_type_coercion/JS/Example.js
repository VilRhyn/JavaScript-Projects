//Challenge #6
function my_Function(){
    document.getElementById("Test").innerHTML = 0/0;
}; //browser displays NaN

document.getElementById("Test").innerHTML = isNaN('This is a string'); //browser displays true

document.getElementById("Test").innerHTML = isNaN('007');//browser displays false

document.write(2E310);//infinity values

document.write(-3E310);//negative infinity

