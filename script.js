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
};

tryNumber.onclick = function(event) {
    let userNumber = document.querySelector('#userNumber').value;
    
    console.log('User number : '+ userNumber);
    console.log('Random number : '+ randomNumber);

    let difference = Math.abs(userNumber - randomNumber);
    console.log('Difference: ' +  difference);

    ++count;
    countPlace.textContent = count;

    if (difference >= 70) {
        promptPlace.textContent = prompts[0];
    } else if (difference >= 35) {
        promptPlace.textContent = prompts[1];
    } else if (difference >= 20) {
        promptPlace.textContent = prompts[2];
    } else if (difference >= 5) {
        promptPlace.textContent = prompts[3];
    } else if (difference === 0) {
        promptPlace.textContent = prompts[4];
    }

    document.querySelector('#userNumber').value = '';
};

resetBtn.onclick = function(event) {
    location.reload();
};

function getRandomInteger(minimum = 0, maximum = 10) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}
