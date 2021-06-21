var min = 0;
var sec = 0;
var msec = 0;
var interval;

var minHeading  = document.getElementById("min")
var msecHeading = document.getElementById("msec")
var secHeading  = document.getElementById("sec")

function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++
        secHeading.innerHTML=sec
        msec = 00 
    }else if(sec >= 60){
        min++
        minHeading.innerHTML = min
        sec = 00 
    }
}
function start() {
    interval = setInterval (timer,10)
    document.getElementById('btn').disabled = true;
}
function stop() {
    clearInterval(interval)
    document.getElementById('btn').disabled = false;
}

function reset() {
    min = 00;
    sec = 00;
    msec = 00;
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    stop()
    document.getElementById('btn').disabled = false;
}


