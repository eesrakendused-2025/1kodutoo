let h, m, s, dateElement, r, g, b, clockInterval;
let isClockMoving = false;
let isMusicPlaying = false;
const defaultFont = "Arial";  
let defaultSize = "10vw"; // Initial color for the clock
let clockPosition = { x: 0, y: 0 }; // Store the position of the clock and date

// Declare music once globally
let music = new Audio();

// Arrays for week days and months
const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

h = document.getElementById("hours");
m = document.getElementById("minutes");
s = document.getElementById("seconds");
dateElement = document.getElementById("date");

const resetBtn = document.getElementById("reset");
const toggleMusicBtn = document.getElementById("toggleMusic");
const fontSelector = document.getElementById("font-selector");
const colorPicker = document.getElementById("colorPicker");
const moveClockBtn = document.getElementById("moveClock");
const staticClockBtn = document.getElementById("staticClock");
const container = document.getElementById("container");
const uploadMusic = document.getElementById("uploadMusic");
const uploadImage = document.getElementById("uploadImage");
const resizeClock = document.getElementById("resizeClock");
const toggleSettingsBtn = document.getElementById("toggleSettingsBtn");
const settings = document.getElementById("settings");
const defaultPosition = { x: 0, y: 0 };
const defaultColor = "#000000";

// Change color of clock when clicking on container
function changeColor() {
    r = Math.ceil(Math.random() * 255);
    g = Math.ceil(Math.random() * 255);
    b = Math.ceil(Math.random() * 255);
    container.style.backgroundColor = `rgb(${r},${g},${b})`;
}
// Font change logic
fontSelector.addEventListener("change", (e) => {
    font = e.target.value;
    document.body.style.fontFamily = font;  // Change the global font
    document.getElementById("time").style.fontFamily = font;  // Change the clock's font
});


// Update clock
function updateDate() {
    let date = new Date();
    let day = date.getDate();
    let weekday = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    // Format the hours, minutes, and seconds to always have two digits

    // Update the date (day, month, year) in the format "Weekday, Month Day, Year"
    dateElement.innerHTML = `${weekNames[weekday]}, ${monthNames[month]} ${day}, ${year}`;
}

// Format digits to have varying sizes
function formatDigits(time) {
    let timeString = time.toString();
    return timeString.split("").map(digit => `<span class="digit">${digit}</span>`).join("");
}

// Function to update the clock with the colon between the digits
function displayTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;

    // Now we'll display the time with a colon between hours, minutes, and seconds
    h.innerHTML = formatDigits(hour);
    m.innerHTML = formatDigits(minute);
    s.innerHTML = formatDigits(second);

    // Add colon in between
    document.getElementById("time").innerHTML = `${h.innerHTML}:${m.innerHTML}:${s.innerHTML}`;

    // Apply color to all the digits
    applyColorToDigits();
}
function applyColorToDigits() {
    const color = colorPicker.value;  // Get the color from the color picker
    const digits = document.querySelectorAll(".digit");

    // Apply the color to all digit spans
    digits.forEach(digit => {
        digit.style.color = color;
    });
}


// Color picker logic
colorPicker.addEventListener("input", (e) => {
    applyColorToDigits();  // Apply the color immediately
});



// Toggle the settings panel visibility
toggleSettingsBtn.addEventListener("click", () => {
    if (settings.style.display === "none" || settings.style.display === "") {
        settings.style.display = "flex"; // Show settings
    } else {
        settings.style.display = "none"; // Hide settings
    }
});
// Resize clock logic
resizeClock.addEventListener("input", (e) => {
    const newSize = e.target.value + "vw";  // Convert slider value to "vw" for responsive sizing
    document.getElementById("time").style.fontSize = newSize;
    document.getElementById("date").style.fontSize = (parseInt(newSize) / 5) + "vw";  // Adjust date font size relative to clock size
});

// Set initial clock size based on defaultSize
document.getElementById("time").style.fontSize = defaultSize;
document.getElementById("date").style.fontSize = "2vw";  // Set the default size for date

// Reset button logic
resetBtn.addEventListener("click", () => {
    // Reset position of the clock and date to default position
    clockPosition = { ...defaultPosition };
    datePosition = { ...defaultPosition };

    // Update the position immediately after resetting
    updateClockPosition();

    // Reset the font size of the clock
    document.getElementById("time").style.fontSize = defaultSize;

    // Reset the color of the clock and date DOES NOT WORK
    resetColor(); 

    // Reset the font family
    document.body.style.fontFamily = defaultFont;  // Reset body font
    document.getElementById("time").style.fontFamily = defaultFont;  // Reset clock font

    // Optionally reset the background color if you want that as well
    container.style.backgroundColor = "aquamarine"; // or any default background color
});

function resetColor() { // Apparently does not work
    h.style.color = defaultColor;
    m.style.color = defaultColor;
    s.style.color = defaultColor;
    dateElement.style.color = defaultColor; // Reset the date color as well
}

function updateClockPosition() {
    document.getElementById("time").style.transform = `translate(${clockPosition.x}px, ${clockPosition.y}px)`;
    dateElement.style.transform = `translate(${datePosition.x}px, ${datePosition.y}px)`;
}
// Function to update the positions of the clock and date
function updatePositions() {
    // Update the position of both the clock and the date
    document.getElementById("time").style.transform = `translate(${clockPosition.x}px, ${clockPosition.y}px)`;
    document.getElementById("date").style.transform = `translate(${clockPosition.x}px, ${clockPosition.y}px)`; // Apply same position
}

// Upload Music functionality
uploadMusic.addEventListener("change", (e) => {
    // Check if the file is selected
    if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        
        // Create a URL for the selected file
        const fileURL = URL.createObjectURL(file);
        
        // Set the music source to the file
        music.src = fileURL;
        
        // Play the music automatically once it's uploaded
        music.play();
        
        // Change the button text to indicate it's playing
        toggleMusicBtn.textContent = "Pause Music";
        isMusicPlaying = true;
    }
});

toggleMusicBtn.addEventListener("click", () => {
    if (isMusicPlaying) {
        music.pause(); // Pause the music
        toggleMusicBtn.textContent = "Play Music"; // Change button text
        isMusicPlaying = false;
    } else {
        music.play(); // Play the music
        toggleMusicBtn.textContent = "Pause Music"; // Change button text
        isMusicPlaying = true;
    }
});

// Event listener for keyboard input (WASD / arrow keys)
document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
        case "w":
            clockPosition.y -= 10; // Move up
            break;
        case "ArrowDown":
        case "s":
            clockPosition.y += 10; // Move down
            break;
        case "ArrowLeft":
        case "a":
            clockPosition.x -= 10; // Move left
            break;
        case "ArrowRight":
        case "d":
            clockPosition.x += 10; // Move right
            break;
    }

    updatePositions(); // Update both the clock and date positions when a key is pressed
});

setInterval(displayTime, 1000);
updateDate();
