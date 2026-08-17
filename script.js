// Change this date/time to your wedding date and local time.
const weddingDate = new Date("December 12, 2026 16:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "<p>Today is the day! ❤️</p>";
    return;
  }

  document.getElementById("days").textContent = String(Math.floor(distance / (1000*60*60*24))).padStart(2, "0");
  document.getElementById("hours").textContent = String(Math.floor((distance / (1000*60*60)) % 24)).padStart(2, "0");
  document.getElementById("minutes").textContent = String(Math.floor((distance / (1000*60)) % 60)).padStart(2, "0");
  document.getElementById("seconds").textContent = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);
