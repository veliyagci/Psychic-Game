var computerGuess;
var userGuessLog = [];
var attemps = 0;


function init() {
    computerGuess =Math.floor(Math.random() * 100 + 1);
    console.log(computerGuess);

}

function compareGuess() {
    var userGuess = " " + document.getElementById('inputBox').value;

    attemps++;
    document.getElementById('attemps').innerHTML = attemps;

if(userGuess > computerGuess) {
    document.getElementById('textOutput').innerHTML = 'Toooooo high';
    document.getElementById('inputBox').value = "";
} else if (userGuess < computerGuess) {
    document.getElementById('textOutput').innerHTML = 'Toooooo low';
    document.getElementById('inputBox').value = "";
} else { 
    document.getElementById('textOutput').innerHTML = 'YOU ARE GETTING LUCKY TONIGHT,THAT IS RIGHT!';
    document.getElementById('textOutput').style.backgroundColor ='blue';
    document.getElementById('textOutput').style.borderRadius ='50%';
}
} 