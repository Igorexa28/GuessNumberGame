const rangeStart = document.querySelector('#begin')
    rangeEnd = document.querySelector('#end');

const saveBtn = document.querySelector('#saveChoice')
    inputNumber = document.querySelector('#upperLimit');

let endOfRange = null, randomNumber = 0, count = 0;

const resetBtn = document.querySelector('#resetProgress'),
    tryNumberBtn = document.querySelector('#tryNumber');

const countPlace = document.querySelector('#count'),
    promptPlace = document.querySelector('#prompt');

const choiceDifficulty = document.querySelector('#difficulty');

const prompts = [
    ' Very cold', ' Cold', ' Hot', ' Very hot', ' You guessed it!'
];

rangeStart.textContent = 0; 

inputNumber.onblur = function() {
    endOfRange = inputNumber.value;

    if (endOfRange <= 0) {
        endOfRange = 10;
    }

    rangeEnd.textContent = endOfRange;
    inputNumber.value = '';

    randomNumber = getRandomInteger(0, endOfRange);
    countPlace.textContent = 0;
};

let difficultyLevel = 'easy';

choiceDifficulty.addEventListener('change', function() {
    difficultyLevel = this.value;
    countPlace.textContent = 0;
});

tryNumber.onclick = function() { 
    let userNumber = document.querySelector('#userNumber').value;
    let difference = Math.abs(userNumber - randomNumber);

    if (userNumber !== '') {
        ++count;
    }

    if ( difficultyLevel === 'easy' ) {
        let moreOrLow = randomNumber > +userNumber ? 'Higher' : 'Lower';

        promptPlace.textContent = moreOrLow;

        if ( randomNumber ===  +userNumber ) {
            promptPlace.textContent = prompts[4];
            alert(`Congratulations! You managed to guess my number) It took you ${count}.`);
            count = 0;
            endOfRange.textContent = '...';
        } 
    }

    if ( difficultyLevel === 'difficult' ) {
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
            endOfRange.textContent = '...';
        }
    }
    countPlace.textContent = count;

    document.querySelector('#userNumber').value = '';
};

resetBtn.onclick = function() {
    location.reload();
};

function getRandomInteger(minimum = 0, maximum = 10) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}

