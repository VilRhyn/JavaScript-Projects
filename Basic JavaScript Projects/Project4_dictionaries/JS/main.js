function my_Dictionary(){//function
    var Animal = {
        Species:"Dog",//key
        Color:"Black",
        Breed:"Labrador",
        Age: 5,
        Sound:"Bark!"
    };
    delete Animal.Sound; // Assignment #25 Using the delete operator presents as 'undefined'
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}//assignment #24 Create a dictionary containing KVPs