let typeWriterIntervals
let cursor = 0

const typeSection = document.getElementById("typewriter")
const textToDisplay = "Wilson-2"
const charByChar = textToDisplay.split('')
const timesToRun = textToDisplay.length


export function launchIntervals(){
    typeWriterIntervals = setInterval(typeWriter, 1000);
}

function typeWriter(typeWriterIntervals) {
    typeSection.innerHTML += charByChar[cursor]
    cursor++
    if(cursor == timesToRun){
        stopIntervals()
    }
    animateWriter()
}

function stopIntervals(){
    clearInterval(typeWriterIntervals)
    typeWriterIntervals = null
}

function animateWriter(){
    typeSection.style.opacity = cursor / timesToRun;
}