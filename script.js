console.warn("script initialisation: SUCCESS!");
let timeString = "error -1";

// aja lugemine ja htmli sissepanek
function readTime() {
    //console.log("- - - - debug - - - -");
    const moment = new Date();

    let h = moment.getHours();
    let m = moment.getMinutes();
    let s = moment.getSeconds();
    let ye = moment.getFullYear();
    let mo = moment.getMonth() + 1;
    let da = moment.getDate();
    h = formatTime(h);
    m = formatTime(m);
    s = formatTime(s);
    // Paki kokku ja saada
    timeString = h + ":" + m + ":" + s;
    dateString = da + "." + mo + "." + ye;
    document.getElementById('time').innerHTML = "> " + timeString + " <";
    document.getElementById('date').innerHTML = "> " + dateString + " <";
}

// ajadele nulli lisamine ja debug
function formatTime(i) {
    if (i < 10) {i = "0" + i};
    //console.log("time: " + i);
    return i;
    
}

// Siin aitas Stack Overflow
var intervalUpdate = setInterval(function() {readTime()}, 1000); 