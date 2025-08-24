const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const massage = document.querySelector('.massage');
const totalguess = document.querySelector('.totalguess');
const resultParas = document.querySelector('.resultParas');

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let guessCount = 1;
let resetButton;
let highorlow; 
let arrayofguess = [];
let gamestart = true
if(gamestart){
    guessSubmit.addEventListener('click', function(){
 const userguess = Number(guessField.value)
    if(isNaN(userguess) || userguess < 1 || userguess > 100){
        massage.textContent = 'Please enter a valid number between 1 and 100';
        guessField.value = '';
    }else{
        checkGuess(userguess)
    }
    })
}
function checkGuess(userguess){
        arrayofguess.push(userguess);
        totalguess.textContent = `Previous guesses: ${arrayofguess.join(', ')}`;
if(userguess == randomNumber){
    massage.textContent = 'Congratulations! You got it right!';
    massage.style.backgroundColor = 'green';
    massage.style.color = 'white';
    totalguess.textContent = `You guessed it in ${guessCount} times`;
    setGameOver();
    gamestart =false
}
else if(guessCount === 10){
    massage.textContent = '!!!GAME OVER!!!';
    totalguess.textContent = `The number was ${randomNumber}`;
    setGameOver();
    gamestart = false
   
}
else{
    if(userguess < randomNumber){
        massage.textContent = 'Your guess is too low!';
        massage.style.backgroundColor = 'yellow';
        massage.style.color = 'black';
                guessCount++;

    }else if(userguess > randomNumber){
        massage.textContent = 'Your guess is too high!';
        massage.style.backgroundColor = 'orange';
        massage.style.color = 'white';
                guessCount++;

    }
}
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    resetButton.className = 'resetBtn'; // Add a class for styling
    // Add reset button inside the container
    document.querySelector('.container').appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}
function resetGame(){
    guessCount = 1;
    arrayofguess = [];
    totalguess.textContent = '';
    massage.textContent = '';
    guessField.disabled = false;
    guessSubmit.disabled = false;
    resetButton.parentNode.removeChild(resetButton);
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
}