// Get the necessary elements
const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let startTime; // To store the start time
let stopwatchInterval; // To store the setInterval function

// Format the time as HH:MM:SS
function formatTime(time) {
  const hours = Math.floor(time / 3600).toString().padStart(2, "0");
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

// Update the display with the current stopwatch time
function updateDisplay() {
  const currentTime = Math.floor((Date.now() - startTime) / 1000);
  display.textContent = formatTime(currentTime);
}

// Event handlers for start, stop, and reset buttons
function startStopwatch() {
  startTime = Date.now();
  stopwatchInterval = setInterval(updateDisplay, 100);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = true;
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  display.textContent = "00:00:00";
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
}

// Add event listeners to the buttons
startBtn.addEventListener("click", startStopwatch);
stopBtn.addEventListener("click", stopStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
