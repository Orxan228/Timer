var msec = document.querySelector(".msec")
var sec = document.querySelector(".sec")
var min = document.querySelector(".min")
var hour = document.querySelector(".hour")
var day = document.querySelector(".day")
var startBtn =document.getElementById("startBtn")
var stopBtn =document.getElementById("stopBtn")
var pauseBtn =document.getElementById("pauseBtn")
var msecCount = 0;
var secCount = 0;
var minCount = 0;
var hourCount = 0;
var dayCount = 0;
var timer;

function startTimer() {
msecCount++;
if (msecCount == 250) {
    secCount++;
    msecCount = 0;
}
if (secCount == 60) {
    minCount++;
    secCount = 0;
}
if (minCount == 60) {
    hourCount++;
    minCount = 0;
}
if (hourCount == 24) {
    dayCount++;
    hourCount = 0;
}

function zero(val) {
    return val > 9 ? val : "0" + val;
}

msec.innerText = zero(msecCount);
sec.innerText = zero(secCount);
min.innerText = zero(minCount);
hour.innerText = zero(hourCount);
day.innerText = zero(dayCount);
}

startBtn.addEventListener("click", function() {
    timer = setInterval(startTimer, 1);
    startBtn.setAttribute("disabled" ,"")
});

pauseBtn.addEventListener("click", function() {
    clearInterval(timer);
    startBtn.removeAttribute("disabled")
});

stopBtn.addEventListener("click", function() {
    clearInterval(timer);
    startBtn.removeAttribute("disabled")
    msecCount = 0;
    secCount = 0;
    minCount = 0;
    hourCount = 0;
    dayCount = 0;
    document.querySelector(".msec").innerText = "00";
    document.querySelector(".sec").innerText = "00";
    document.querySelector(".min").innerText = "00";
    document.querySelector(".hour").innerText = "00";
    document.querySelector(".day").innerText = "00";
  });