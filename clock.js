//Võtsin aluseks kunagi tunnis tehtud kella failid

let h, m, s, minuteVal, hourVal, secondVal, dateElement, day, month, year;

h = document.getElementById('hours');
m = document.getElementById('minutes');
s = document.getElementById('seconds');
dateElement = document.getElementById('date');
dayName = document.getElementById('day');

//keele vahetamise jaoks lasi chatgpt sama prompti järel, millega sain keele nupu jaoks funktsiooni
//mõlemas keeles teha massiivid
let monthNamesEST = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
let dayNamesEST = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let monthNamesENG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayNamesENG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let currentLanguage = 'EST';

const backgroundImages = [
    'background_images/image1.jpg',
    'background_images/image2.jpg',
    'background_images/image3.jpg'
];

let currentIndex = 0;

const textColors = [
    'darkorange',
    'lightblue',
    'pink',
    'white'
];

let colorIndex = 0;

function updateClock(){
    console.log("jõudsin updateClock funktsiooni");
    let date = new Date();
    hourVal = date.getHours();
    minuteVal = date.getMinutes();
    secondVal = date.getSeconds();
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    weekDay = date.getDay();


    if(hourVal < 10){
        hourVal = "0" + hourVal;
    }

    if(minuteVal < 10){
        minuteVal = "0" + minuteVal;
    }

    if(secondVal < 10){
        secondVal = "0" + secondVal;
    }

    h.innerHTML = hourVal;
    m.innerHTML = minuteVal;
    s.innerHTML = secondVal;
    
//seoses keele vahetamisega lasi chatgpt ka need lisada, sama prompti alt kus funktsiooni sain
    let months = currentLanguage === 'EST' ? monthNamesEST : monthNamesENG;
    let days = currentLanguage === 'EST' ? dayNamesEST : dayNamesENG;

    dateElement.innerHTML = `${days[weekDay]}, ${day}. ${months[month]} ${year}`;
}

//taustapildi vahetaumise funktsiooni prompt:
//could i make a function so that every time i click on the screen
//the background image would cycle

function changeBackground() {
    const container = document.getElementById('container');
    container.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % backgroundImages.length;
}

const container = document.getElementById('container');
container.addEventListener('click', changeBackground);

changeBackground();

//containeris olevate tekstide värvi muutmise funktsioon

//prompt: how to make function so that every time i press a keybord button
//my text colours would cycle

function changeTextColor() {
    const container = document.getElementById('container');
    const currentColor = textColors[colorIndex];
    
    container.style.color = currentColor;
    
    colorIndex = (colorIndex + 1) % textColors.length;
}

document.addEventListener('keydown', changeTextColor);

changeTextColor();

//prompt: how to make a function for a button that cycles between est and eng language
//for month names and day names
const langButton = document.getElementById('lang-toggle');

langButton.addEventListener('click', () => {
    if (currentLanguage === 'EST') {
        currentLanguage = 'ENG';
        langButton.textContent = 'EST';
    } else {
        currentLanguage = 'EST';
        langButton.textContent = 'ENG';
    }
    updateClock();
});


setInterval(updateClock, 1000);
updateClock();