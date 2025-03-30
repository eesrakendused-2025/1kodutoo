// Selle faili sisu tuli juba clock.html luues, kus prompt oli: Lisaks loo helinupp, et saaksin tasutale panna muusika mängima, 
// millel saab helitugevust muuta (chatgpt pakkus välja, et luua liugur, mis mulle sobis!). Lisaks, et ka oleks eraldi sound.js fail tuli gpt ideena.

const soundToggle = document.getElementById('sound-toggle');
const volumeSlider = document.getElementById('volume-control');
const audio = new Audio('music/taustamuusika.mp3');
audio.loop = true;
audio.volume = parseFloat(volumeSlider.value);

let isPlaying = false;

//ChatGPT ise pakkus  ka välja, et võiks saada samast nupust muusika pasuile/kinni panna, mis mulle jällegi sobis ja lasin tal lisada.
soundToggle.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    soundToggle.textContent = '🔊';
    volumeSlider.style.display = 'none';
  } else {
    audio.play().then(() => {
      soundToggle.textContent = '🔇';
      volumeSlider.style.display = 'block';
    }).catch((err) => {
      console.error('Heli ei saanud käivituda:', err);
    });
  }
  isPlaying = !isPlaying;
});

//ChatGPT pakutud liugur (slider)
volumeSlider.addEventListener('input', () => {
  audio.volume = parseFloat(volumeSlider.value);
});
