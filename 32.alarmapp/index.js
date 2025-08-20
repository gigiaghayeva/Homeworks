const alarmBtn = document.querySelector("button");
const selects = document.querySelectorAll("select");

// Create an alarm sound
const alarmSound = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");

alarmBtn.addEventListener("click", () => {
    // Get selected values
    let hour = selects[0].value;
    let minute = selects[1].value;
    let second = selects[2].value;

    if (hour === "Hour" || minute === "Minute" || second === "Second") {
        alert("Please set a valid time!");
        return;
    }
    // Fill seconds dropdown
const secondsSelect = document.querySelectorAll("select")[2];

for (let i = 0; i < 60; i++) {
    let option = document.createElement("option");
    option.value = i < 10 ? "0" + i : i;  // Add leading zero
    option.textContent = option.value;
    secondsSelect.appendChild(option);
}


    // Get current time
    const now = new Date();
    const alarmTime = new Date();

    alarmTime.setHours(parseInt(hour));
    alarmTime.setMinutes(parseInt(minute));
    alarmTime.setSeconds(parseInt(second));

    // If alarm time already passed today, set it for tomorrow
    if (alarmTime < now) {
        alarmTime.setDate(alarmTime.getDate() + 1);
    }

    const timeToAlarm = alarmTime - now;

    alert(`Alarm set for ${hour}:${minute}:${second}`);

    // Set timeout for alarm
    setTimeout(() => {
        alarmSound.play();
        alert("⏰ Wake up! Alarm ringing!");
    }, timeToAlarm);
});
