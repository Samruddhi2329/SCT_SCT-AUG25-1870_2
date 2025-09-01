let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');
let display = document.querySelector('.display');

let seconds = 0;
let interval = null;

function updateTime() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    display.textContent =
        `${hrs.toString().padStart(2, '0')}:` +
        `${mins.toString().padStart(2, '0')}:` +
        `${secs.toString().padStart(2, '0')}`;
}

function start() {
    if (interval) return; // Prevent multiple intervals
    interval = setInterval(() => {
        seconds++;
        updateTime();
    }, 1000);
}

function pause() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    pause();
    seconds = 0;
    updateTime();
}

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);

updateTime(); // Initialize display
