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
    let difference = Math.abs(userNumber - randomNumber);

    if (userNumber !== '') {
        ++count;
    }

    countPlace.textContent = count;

    sayPrompt(difference,promptPlace, prompts);

    document.querySelector('#userNumber').value = '';
};

resetBtn.onclick = function(event) {
    location.reload();
};

function getRandomInteger(minimum = 0, maximum = 10) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}

function sayPrompt(difference, whereToInsert, array) {
    if (difference >= 70) {
        whereToInsert.textContent = array[0];
    } else if (difference >= 35) {
        whereToInsert.textContent = array[1];
    } else if (difference >= 15) {
        whereToInsert.textContent = array[2];
    } else if (difference >= 5) {
        whereToInsert.textContent = array[3];
    } else if (difference === 0) {
        whereToInsert.textContent = array[4];
        alert('Congratulations! You managed to guess my number)');
    }
}
