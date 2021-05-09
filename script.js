const rangeStart = document.querySelector('#begin')
    rangeEnd = document.querySelector('#end');

const saveBtn = document.querySelector('#saveChoice')
    inputNumber = document.querySelector('#upperLimit');

let endOfRange = null, randomNumber = 0, count = 0;

const resetBtn = document.querySelector('#resetProgress'),
    tryNumberBtn = document.querySelector('#tryNumber');

const countPlace = document.querySelector('#count'),
    promptPlace = document.querySelector('#prompt');

const prompts = [
    ' Very cold', ' Cold', ' Hot', ' Very hot', ' You guessed it!'
];

rangeStart.textContent = 0; 

inputNumber.onblur = function(event) {
    endOfRange = inputNumber.value;

    if (endOfRange <= 0) {
        endOfRange = 10;
    }

    rangeEnd.textContent = endOfRange;
    inputNumber.value = '';

    randomNumber = getRandomInteger(0, endOfRange);
    countPlace.textContent = 0;
    console.log(randomNumber);
};


console.log(randomNumber);

tryNumber.onclick = function(event) {
    let userNumber = document.querySelector('#userNumber').value;
    let difference = Math.abs(userNumber - randomNumber);

    if (userNumber !== '') {
        ++count;
    }

    // * First version of program

    if (difference >= 70) {
        promptPlace.textContent = prompts[0];
    } else if (difference >= 35) {
        promptPlace.textContent = prompts[1];
    } else if (difference >= 15) {
        promptPlace.textContent = prompts[2];
    } else if (difference >= 5) {
        promptPlace.textContent = prompts[3];
    } else if (difference === 0) {
        promptPlace.textContent = prompts[4];
        alert(`Congratulations! You managed to guess my number) It took you ${count}.`);
        count = 0;
    }

    countPlace.textContent = count;

    // * Second version of program

    /*

    let moreOrLow = randomNumber > userNumber ? 'Higher' : 'Lower';

    promptPlace.textContent = moreOrLow;

    if ( randomNumber ===  +userNumber) {
        promptPlace.textContent = prompts[4];
        alert(`Congratulations! You managed to guess my number) It took you ${count}.`);
        count = 0;
    }    

    */

    document.querySelector('#userNumber').value = '';
};

console.log(randomNumber);

resetBtn.onclick = function(event) {
    location.reload();
};

function getRandomInteger(minimum = 0, maximum = 10) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}

