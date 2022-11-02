let min = 1,
    max = 10,
    winnerNumber = getRandomNumber(min, max),
    numberOfGuess = 3;

const gameWrapper = document.querySelector('.wrapper'),
      minNumber = document.querySelector('.min-num'),
      maxNumber = document.querySelector('.max-num'),
      input = document.querySelector('#number-input'),
      submitBtn = document.querySelector('#number-submit'),
      message = document.querySelector('.message');

minNumber.innerText = min;
maxNumber.textContent = max;

submitBtn.addEventListener('click', function(){
    //console.log(input.value)
    //console.log(typeof input.value) - string
    let guess = parseInt(input.value)

    if(isNaN(guess) || guess < min || guess > max){
        showMessage(`Please enter a number between ${min} and ${max}!`, "red")
        input.style.borderColor = 'red';
    }

    if(guess === winnerNumber){
        input.disabled = true;
        input.style.borderColor = '#34eb98';
        showMessage(`Your guess is correct, YOU WIN!`, '#34eb98')
        submitBtn.value = 'Play again';
        submitBtn.className += 'play-again';
    }else {
        numberOfGuess -=1;
        if(numberOfGuess === 0){
            input.disabled = true;
            input.style.borderColor = 'red';
            //input.value = "";
            //submitBtn.disabled = true;
            showMessage(`Game over. You lose, ${guess} isn't  correct, the correct number was ${winnerNumber}!`, "red")
            submitBtn.value = 'Play again';
            submitBtn.className += 'play-again';
        }else{
            input.value = "";
            showMessage(`${guess} isn't correct, you have ${numberOfGuess} guesses left`, "red")
        }
    }

});

//dodaje se drugi event, da se pojavi play again na buttonu
gameWrapper.addEventListener('mousedown', function(e){
    //console.log(1)
    if(e.target.className === 'play-again'){
        input.value = '';
        window.location.reload()
        
    }
});

function showMessage(msg, color){
    message.style.color = color;
    message.innerText = msg;
};

function getRandomNumber(min, max){
    return Math.round(Math.random()*(max-min+1)+min);
};



