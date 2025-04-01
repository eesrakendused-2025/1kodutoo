//chatgpt loodud kood, prompt: create a js code for a button that plays a sound
const playSoundButton = document.getElementById('play-sound');

// Create audio object
const sound = new Audio('sounds/sound1.mp3'); // Adjust file name/path if needed

// Play sound on click
playSoundButton.addEventListener('click', () => {
    sound.currentTime = 0; // Rewind to start if already playing
    sound.play();
});