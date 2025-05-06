
// Generated with ChatGPT prompt: "Create a fullscreen responsive digital clock with time, weekday, and year."
let is24Hour = true;
let clock = document.getElementById("clock");
let date = document.getElementById("date");
let fontIndex = 0;
let fonts = ["Orbitron", "Arial", "Courier New", "Georgia"];
let colorIndex = 0;
let colors = ["white", "cyan", "yellow", "pink", "lime"];
let backgrounds = ["#1c1c1c", "#003049", "#4a4e69", "#22223b", "#343a40"];

function updateClock() {
    const now = new Date();
    let h = now.getHours();
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');

    let period = "";
    if (!is24Hour) {
        period = h >= 12 ? " PM" : " AM";
        h = h % 12 || 12;
    }

    clock.innerText = `${h.toString().padStart(2, '0')}:${m}:${s}${period}`;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date.innerText = now.toLocaleDateString(undefined, options);
}

function changeFont() {
    fontIndex = (fontIndex + 1) % fonts.length;
    document.body.style.fontFamily = fonts[fontIndex];
}

function toggle24Hour() {
    is24Hour = !is24Hour;
}

function changeColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    clock.style.color = colors[colorIndex];
    date.style.color = colors[colorIndex];
}

function changeBackground() {
    let bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.background = bg;
}

function increaseSize() {
    clock.style.fontSize = (parseFloat(clock.style.fontSize) || 10) + 2 + 'vw';
}

function decreaseSize() {
    clock.style.fontSize = (parseFloat(clock.style.fontSize) || 10) - 2 + 'vw';
}

setInterval(updateClock, 1000);
updateClock();
