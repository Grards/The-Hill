let countSeconds

let seconds = 0
let minutes = 0
let hours = 0
let days = 0

const counter = document.getElementById("counter")

export function startCountTime(){
    countSeconds = setInterval(countTime, 1000);
}

function countTime(){
    animateCounter()

    if(seconds >= 60){
        minutes++
        seconds = 0
    }
    if(minutes >= 60){
        hours++
        minutes = 0
    }
    if(hours >= 24){
        days++
        hours = 0
    }

    counter.innerHTML = days + " days " + "<br>" + hours + " hours " + minutes + " minutes " + seconds + " seconds"
    seconds++
}

function animateCounter(){
    counter.classList.toggle("colorCounter")
}