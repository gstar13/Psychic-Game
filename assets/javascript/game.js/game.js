// creates an array that lists all of the options for the computer to guess from
var computerChoices = [a,b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]

//creates variables to hold the number of wins and losses

var wins = 0;
var losses = 0;
var guesses = 0;
var guessesleft = 10;

//creates variables that hold references to the places in the html
//where we want to display things

var directionsText = document.getElementById ("directions-text");
var userChoiceText = document.getElementById ("userchoice-text");
var computerChoiceText = document.getElementById ("computerchoice-text");
var winsText = document.getElementById ("wins-text");
var lossesText = document.getElementById ("losses-text");
var tiesText = document.getElementById ("ties-text");
var guessesLeft = document.getElementById ("guessesleft-text");
var guessesSoFar = document.getElementById ("guessessofar-text");

//this function will run anytime the user presses a key
document.onkeyup = function(event) {
    //determines which key was pressed
    var userGuess= event.key;
     //randomly chooses from options array
    var computerGuess= computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
     //alerts the key the user pressed (userGuess)
    alert("User guess: " + userGuess);
    //alerts the computer's guess
    alert( "Computer's guess" + computerGuess);
    
    if (userGuess===computerGuess) {
        alert(" You Won");
        wins++; guessesleft--;

    }
}