//kogu kood chatgpt tehtud, prompt: create a js code for a timer button where user can input time in seconds
//natuke muutsin peale buttonBari tegemist
const timerButton = document.getElementById('set-timer');
const timerDisplay = document.getElementById('timer-display');
let timerInterval = null;

timerButton.addEventListener('click', () => {
    let timeInput = prompt("Enter timer duration in seconds:");
    let timeInSeconds = parseInt(timeInput);

    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    startTimer(timeInSeconds);
});

function startTimer(seconds) {
    clearInterval(timerInterval);

    timerDisplay.textContent = `Timer: ${seconds}s`;

    timerInterval = setInterval(() => {
        seconds--;
        if (seconds > 0) {
            timerDisplay.textContent = `Timer: ${seconds}s`;
        } else {
            timerDisplay.textContent = `Timer done!`;
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}