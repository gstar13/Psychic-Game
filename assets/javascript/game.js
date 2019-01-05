// creates an array that lists all of the options for the computer to guess from
var computerChoices = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

//creates variables to hold the number of wins and losses
var wins = 0;
var losses = 0;
var guessesLeft = 9; 
var guesses= 9;
var lettersGuessed = [];
var rightAnswer;


 //randomly chooses from options array
 var computerGuess= function () {
     rightAnswer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
     console.log(rightAnswer);
 };
 var newGuesses = function () {
    document.getElementById ("lettersGuessed").innerHTML = "Guesses So Far: " + lettersGuessed.join(",");
 };
  var guessLeft = function() {
      document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
  };

  var game = function () {
      lettersGuessed = [];
      guessesLeft = 9;
      computerGuess();
      guessLeft();
      newGuesses();

  }


//this function will run anytime the user presses a key
document.onkeyup = function(event) {
    //determines which key was pressed
    var userGuess= event.key;
    //alerts the key the user pressed (userGuess)
    alert("User guess: " + userGuess);
    guessesLeft--;
    console.log(guessesLeft);
    lettersGuessed.push(userGuess);
    newGuesses();
    guessLeft();
    if (guessesLeft>0) {
        if (userGuess===rightAnswer)  {
            alert(" You Won");
            wins++; 
            document.getElementById("wins").innerHTML = "wins:" + wins;
            game();
    }

} else if (guessesLeft == 0){
    alert("Nope");
    losses++;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    game();
}
};
   
    
     
     
   
      
       

   
    