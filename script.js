function updateTimeAndDay() {
  const now = new Date();
  const utcTime = now.toUTCString().split(' ')[4];
  const day = now.toLocaleString('en-US', { weekday: 'long' });

  document.getElementById('current-time-utc').textContent = utcTime;
  document.getElementById('current-day').textContent = day;
}

// Update time and day every second
setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();
