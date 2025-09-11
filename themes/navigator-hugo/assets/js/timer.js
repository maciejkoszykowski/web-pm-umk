
function updateCountdown() {
const targetElement = document.getElementById("countdown-target");
const targetDateStr = targetElement.getAttribute("data-date");
const targetDate = new Date(targetDateStr);
const now = new Date();

const diff = targetDate - now;

if (diff <= 0) {
document.getElementById("days").textContent = "00";
document.getElementById("hours").textContent = "00";
document.getElementById("minutes").textContent = "00";
document.getElementById("seconds").textContent = "00";
return; // zatrzymujemy działanie po zakończeniu odliczania
}

const seconds = Math.floor((diff / 1000) % 60);
const minutes = Math.floor((diff / 1000 / 60) % 60);
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const days = Math.floor(diff / (1000 * 60 * 60 * 24));

document.getElementById("days").textContent = String(days).padStart(2, '0');
document.getElementById("hours").textContent = String(hours).padStart(2, '0');
document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

// aktualizuj co sekundę
setInterval(updateCountdown, 1000);
// wykonaj od razu przy załadowaniu
updateCountdown();
