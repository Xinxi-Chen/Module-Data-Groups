let timeRemaining = 0;
let countdownInterval = null;
let isPaused = false;


function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const minutesDisplay = String(minutes).padStart(2, '0');
  const secondsDisplay = String(seconds).padStart(2, '0');
  return `${minutesDisplay}:${secondsDisplay}`;
}

function updateDisplay() {
  const timeDisplay = document.getElementById('timeRemaining');
  timeDisplay.textContent = `Time Remaining: ${formatTime(timeRemaining)}`;
}

function setAlarm() {
  const input = document.getElementById('alarmSet');
  timeRemaining = parseInt(input.value);
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
  isPaused = false;
  updatePauseButton();
  updateDisplay();

  countdownInterval = setInterval(() => {
    timeRemaining--;
    console.log("Time reminding:", timeRemaining);
    updateDisplay();

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      console.log("Alarm going off!");
      playAlarm();
      document.body.style.backgroundColor = 'green';
    }
  }, 1000);
}

function togglePause() {
  if(!countdownInterval) {
    alert("Please set an alarm first!");
    return;
  }
  if (isPaused) {
    console.log("Resuming alarm");
    isPaused = false;

    countdownInterval = setInterval(() => {
      timeRemaining--;
      updateDisplay();

      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        playAlarm();
        document.body.style.backgroundColor = 'green';
      }
    }, 1000);

  } else {
    console.log("Pausing alarm");
    isPaused = true;
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
  updatePauseButton();
}

function updatePauseButton() {
  const pauseButton = document.getElementById('pause');
  if (isPaused) {
    pauseButton.textContent = "Resume";
  } else {
    pauseButton.textContent = "Pause";
  }
}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });
  document.getElementById("pause").addEventListener("click", () => {
    togglePause();
  });
  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
