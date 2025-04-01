// Prompt: Pean looma elektroonilise kella, mis näitab lisaks kellaajale ka kuupäeva, nädalapäeva ja aastat.
// Vastavalt kasutaja tegevusele on võimalik muuta kuut lauakella atribuuti.
// Pean kasutama eventListener'e ja funktsioone.

const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const colorPicker = document.getElementById("colorPicker");
const fontSelect = document.getElementById("fontSelect");
const fontSize = document.getElementById("fontSize");
const bgColor = document.getElementById("bgColor");
const formatSelect = document.getElementById("formatSelect");
const toggleTheme = document.getElementById("toggleTheme");

let isBladeRunner = true;

function updateClock() {
  const now = new Date();
  const hours24 = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hours = formatSelect.value === "12" ? ((hours24 + 11) % 12 + 1) : hours24;
  const ampm = formatSelect.value === "12" ? (hours24 >= 12 ? " PM" : " AM") : "";

  timeEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}${ampm}`;

  const weekday = capitalizeFirstLetter(now.toLocaleString('et-EE', { weekday: 'long' }));
  const date = now.toLocaleDateString('et-EE');
  dateEl.textContent = `${weekday}, ${date}`;
}

function pad(n) {
  return n < 10 ? "0" + n : n;
}

/* Prompt: Soovin, et nädalapäev oleks suure tähega */
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  

setInterval(updateClock, 1000);
updateClock();

colorPicker.addEventListener("input", () => {
  timeEl.style.color = colorPicker.value;
});

fontSelect.addEventListener("change", () => {
  document.body.style.fontFamily = fontSelect.value;
});

fontSize.addEventListener("input", () => {
  timeEl.style.fontSize = `${fontSize.value}vw`;
});

bgColor.addEventListener("input", () => {
  document.body.style.backgroundColor = bgColor.value;
});

formatSelect.addEventListener("change", () => {
  updateClock();
});

toggleTheme.addEventListener("click", () => {
  isBladeRunner = !isBladeRunner;
  if (isBladeRunner) {
    document.body.style.backgroundColor = "black";
    timeEl.style.color = "#00ffff";
    dateEl.style.color = "#ff4081";
  } else {
    document.body.style.backgroundColor = "white";
    timeEl.style.color = "black";
    dateEl.style.color = "gray";
  }
});


/* Prompt: Soovin mängida lehel muusikat */
const music = document.getElementById("bgMusic");
const toggleMusicBtn = document.getElementById("musicToggle");
let musicPlaying = false;

toggleMusicBtn.addEventListener("click", () => {
  if (musicPlaying) {
    music.pause();
    toggleMusicBtn.textContent = "🔇 Mute";
  } else {
    music.play();
    toggleMusicBtn.textContent = "🔊 Muusika mängib";
  }
  musicPlaying = !musicPlaying;
});
