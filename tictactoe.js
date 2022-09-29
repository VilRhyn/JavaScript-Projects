//Keeps track of who's turn it is 
let activePlayer = 'X';
//Stores an array of moves. 
let selectedSquares = [];
//Determines win conditions
function placeXOrO(squareNumber) {
    //Ensures a square hasn't been previously selected
    //.some() is used to check each element of selectedSquare array
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
            //Condition: checks whose turn it is
            if (activePlayer === 'X') {
                //If activePlayer is equal to 'X', the x.png is placed in HTML
                select.style.backgroundImage = 'url("images/x.png")';
                //if active player not 'x' than must be 'o'
            } else {
                //If activePlayer = 'O', the o.png is placed in HTML
                select.style.backgroundImage = 'url("images/o.png")';
            }
            //squareNumber and activePlayer are concatenated together and added to array
            selectedSquares.push(squareNumber + activePlayer);
            //This calls a function to check for any win conditions
            checkWinConditions();
            //This condition is for changing the active player.
            if (activePlayer === 'X') {
                //If active player 'x' change to 'o'
                activePlayer= 'O';
                //If active player is anything other than 'x'
            } else {
                //Change activePlayer to 'x'
                activePlayer = 'X';
            }

    //This function plays placement sound
    audio('./media/zsshake.mp3');
    //Condition checks to see if it is comps turn
    if(activePlayer === 'O') {
    //This function disables clicking for computer choice.
    disableClick();
    //This function waits 1 second before placing the image and enabling Click
    setTimeout(function() { computersTurn(); }, 1000);
        }            
        //Needed for compTurn() to work
        return true;
    }

    //Results in a random square being selected
    function computersTurn() {
        //Boolean for While Loop
        let success = false; 
        //Variable stores random number 0 - 8
        let pickASquare;
        //allows while loop to keep trying if a squre is selected already
        while(!success) {
            //Pick a randome number between 0 - 8 
            pickASquare = String(Math.floor(Math.random() * 9));
            //If random # evaluates returns true the square hasn't been selected yet 
               if (placeXOrO(pickASquare)){
                //This line calls the function
                placeXOrO(pickASquare);
                //Changes boolean and ends loop
                success = true;
               };
            }
    }
}  
    
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine ( 50, 100, 558, 100); }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine ( 50, 304, 558, 304); }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine ( 50, 508, 558, 508); }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine ( 100, 50, 100, 558); }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine ( 304, 50, 304, 558); }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine ( 508, 50, 508, 558); }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine ( 100, 508, 510, 90); }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine ( 100, 100, 520, 520);}
    else if (arrayIncludes('0o', '1o', '2o')) { drawWinLine ( 50, 100, 558, 100); }
    else if (arrayIncludes('3o', '4o', '5o')) { drawWinLine ( 50, 304, 558, 304); }
    else if (arrayIncludes('6o', '7o', '8o')) { drawWinLine ( 50, 508, 558, 508); }    
    else if (arrayIncludes('0o', '3o', '6o')) { drawWinLine ( 100, 50, 100, 558); }
    else if (arrayIncludes('1o', '4o', '7o')) { drawWinLine ( 304, 50, 304, 558); }
    else if (arrayIncludes('2o', '5o', '8o')) { drawWinLine ( 508, 50, 508, 558); }
    else if (arrayIncludes('6o', '4o', '2o')) { drawWinLine ( 100, 508, 510, 90); }
    else if (arrayIncludes('0o', '4o', '8o')) { drawWinLine ( 100, 100, 520, 520);}
//Condition checks for tie
else if (selectedSquares.length >= 9) {
    //Plays the tie game sound
    audio('./media/tie.mp3');
    //Sets a .3 timer before resetGame is called
    setTimeout(function () { resetGame(); },1000);
    }


//Function checks if an array includes 3 strings 
//Used to check for each win condition
function arrayIncludes(squareA, squareB, squareC) {
    //Used to check for 3 in a row
    const a  = selectedSquares.includes(squareA );
    const b  = selectedSquares.includes(squareB );
    const c  = selectedSquares.includes(squareC );
    //If these variables are included in array true is returned 
    //our else if condition executes the drawWinLine function
    if (a === true && b === true && c === true) {return true;}
    }
}

//This function makes our body element temporarily unclickable
function disableClick() {
    //Makes body unclickable
    body.style.pointerEvents='none';
    //Makes body clickable again after 1 second
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//This takes a string parameter of the path you set earlier for placement sound ('./media/place.mp3)
function audio(audioURL) {
    //Creat a new audio object and pass the path as a parameter.
    let audio = new Audio (audioURL);
    //Play method plays audio sound
    audio.play();
}

//This function utilizes html canvas to draw win lines
function drawWinLine(coordX1,coordY1, coordX2, coordY2) {
    //This accesses our html canvas element
    const canvas = document.getElementById('win-lines');
    //Gives us access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //Indicates where the start of lines y axis is
    let x1 = coordX1,
    y1 = coordY1,
    x2 = coordX2,
    y2 = coordY2
    x = x1,
    y = y1;

    //Interacts with the canvas
    function animateLineDrawing(){
        //Variable creats loop for when the game ends it restarts
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //Clears content from the last loop iteration
        c.clearRect(0,0,608,608);
        //Starts a new path
        c.beginPath();
        //Moves us to starting point for line
        c.moveTo(x1, y1);
        //Indicates end point of out line 
        c.lineTo(x, y,);
        //Width of line
        c.lineWidth = 10;
        //Sets color of line 
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //Draws all ^ 
        c.stroke();
        //Checks if we've re3ached end point 
        if (x1 <= x2 && y1 <= y2) {
            //adds 10 to previous end x point 
            if (x < x2) { x += 10; }
            //adds 10 to previous end y point 
            if (y < y2) {y += 10; }
            //Cancels our animation loop if reached the end points
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //Similar to above
        //It was necessary for the 6, 4, 2 win condition
        if (x1 <= x2 && y1 >=y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
        
    }
    //Clears canvas after win line 
    function clear () {
        //Starts animation loop 
        const animationLoop = requestAnimationFrame(clear);
        //Clears our canvas
        c.clearRect(0, 0, 608, 608);
        //Stops animation loop 
        cancelAnimationFrame(animationLoop);
    }
    //Disalows clicking while the win sound is playing 
    disableClick();
    //Plays win sounds. 
    audio('./media/zapsplatair.mp3');
    //calls our main animation loop 
    animateLineDrawing();
    //Waits 1 second
    //Clears canvas
    //Resets game 
    //Allows clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//Resets the game in a tie or a win
function resetGame() {
    //for loop iterates through each html square element
    for (let i = 0; i < 9; i++) {
        //Variable gets the html element of i 
    let square = document.getElementById(String(i));
    //Removes elements backgroundImage
    square.style.backgroundImage = '';
}
//Resets Array 
selectedSquares = [];
}