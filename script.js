let timer;
let isRunning = false;
let seconds = 0;
let laps = [];

function startPause() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('startPause').innerText = 'Start';
  } else {
    timer = setInterval(updateDisplay, 1000);
    document.getElementById('startPause').innerText = 'Pause';
  }
  isRunning = !isRunning;
}

function updateDisplay() {
  seconds++;
  const display = formatTime(seconds);
  document.getElementById('display').innerText = display;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  laps = [];
  document.getElementById('display').innerText = '00:00:00';
  document.getElementById('startPause').innerText = 'Start';
  document.getElementById('laps').innerText = '';
}

function recordLap() {
  if (isRunning) {
    laps.push(formatTime(seconds));
    displayLaps();
  }
}

function displayLaps() {
  const lapsElement = document.getElementById('laps');
  lapsElement.innerHTML = '';
  laps.forEach((lap, index) => {
    const lapItem = document.createElement('div');
    lapItem.innerText = `Lap ${index + 1}: ${lap}`;
    lapsElement.appendChild(lapItem);
  });
}

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
