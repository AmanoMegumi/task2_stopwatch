let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milisecond = 0;

let condition = "ready";
let interval;

function stopWatch(){
    milisecond++;
    if (milisecond / 10 == 1){
        seconds++;
        milisecond = 0;
        if(seconds / 60 == 1){
            minutes++;
            seconds = 0;
        }
    }

    timer.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milisecond;
}

start.addEventListener("click", function(){
    if(condition == "ready"){
        interval = setInterval(stopWatch, 100);
        start.disabled = true;
        condition = "go"
    }
    else if(condition == "pause"){
        interval = setInterval(stopWatch, 100);
        start.disabled = true;
        condition = "go"
    }
})

stop.addEventListener("click", function(){
    if(condition == "go"){
        clearInterval(interval);
        start.disabled = false;
        condition = "pause"
    }
    else{
        stop.disabled = true;
    }
})

reset.addEventListener("click", function(){
    clearInterval(interval);
    timer.innerHTML = "0:0:0:0"
    hours = 0;
    minutes = 0;
    seconds = 0;
    milisecond = 0;
    condition = "ready"
    start.disabled = false;
    stop.disabled = false;
})