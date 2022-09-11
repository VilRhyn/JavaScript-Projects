window.alert("Hello, World!"); //Using window.alert

document.write(' Hello, World!');//Using document.write


var R = " Rhyn";
document.write(R);
window.alert(R);

document.write(" Sally said, \"Let\'s go!\"")

var ConStr = (" \"Change is inevitable; " + "growth is optional\"")
document.write(ConStr)//Concatenated 

var family = "Jones", Dad = "Tim", Mom = "Kim", Kid = "Jim"

function My_First_Function() { //Challeng #2 //Defining a function
    var str = "This text is green!";//Defining a variable
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;//Color button
}