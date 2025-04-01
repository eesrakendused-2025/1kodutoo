//Suures osas tehtud lihtsalt copy paste värvide ja taustapiltide vahetamise funktsioonidest
//ja siis tegin vastavad muudatused
console.log("font.js loaded");

const fontButton = document.getElementById('font-toggle');

const fonts = [
    "'Helvetica', sans-serif",
    "'Courier New', Courier, monospace",
    "'Georgia', serif",
    "'Lucida Console', Monaco, monospace",
    "'Comic Sans MS', cursive, sans-serif"
];

let currentFontIndex = 0;

fontButton.addEventListener('click', () => {
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    
    //need kaks rida olid chatgpt abiga tehtud, kuna ei saanud tööle alguses fontide vahetamist
    //prompt: pastesin talle selle koodi ning veateate, mis konsool andis
    document.getElementById('container').style.setProperty('font-family', fonts[currentFontIndex], 'important');
    console.log("Font changed to:", fonts[currentFontIndex]);
});