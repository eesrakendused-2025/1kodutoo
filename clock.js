document.addEventListener("DOMContentLoaded", () => {
    const clockElement = document.getElementById("clock");
    const dateElement = document.getElementById("date");
    const changeBgButton = document.getElementById("change-bg");
    const changeFontButton = document.getElementById("change-font");
    const changeColorButton = document.getElementById("change-color");
    const toggleFormatButton = document.getElementById("toggle-format");
    const changeFontSizeButton = document.getElementById("change-font-size"); // Suuruse nupp
    const fullscreenButton = document.getElementById("fullscreen"); // Täisekraani nupp

    let is24HourFormat = true;
    
    const updateClock = () => {
        const now = new Date();
        const hours = is24HourFormat ? now.getHours() : ((now.getHours() % 12) || 12);
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const ampm = is24HourFormat ? "" : (now.getHours() >= 12 ? " PM" : " AM");
        clockElement.textContent = `${hours}:${minutes}:${seconds}${ampm}`;
        dateElement.textContent = now.toDateString();
    };
    
    setInterval(updateClock, 1000);
    updateClock();
    
    changeBgButton.addEventListener("click", () => {
        document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 50%)`;
    });
    
    changeFontButton.addEventListener("click", () => {
        const fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana"];
        document.body.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    });
    
    changeColorButton.addEventListener("click", () => {
        clockElement.style.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
    });
    
    toggleFormatButton.addEventListener("click", () => {
        is24HourFormat = !is24HourFormat;
        updateClock();
    });
    
    changeFontSizeButton.addEventListener("click", () => {
        let newSize = prompt("Sisesta uus fondi suurus pikslites:", "30");
        if (newSize) {
            document.body.style.fontSize = `${newSize}px`;
        }
    });

    // Täisekraani lülitamine sisse/välja
    fullscreenButton.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            // Kui ei ole täisekraanil, siis mine täisekraanile
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) { // Chrome ja Safari
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
                document.documentElement.msRequestFullscreen();
            }
        } else {
            // Kui on täisekraanil, siis välju
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome ja Safari
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
        }
    });
});
