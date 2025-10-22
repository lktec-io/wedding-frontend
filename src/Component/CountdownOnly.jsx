import React, { useEffect } from "react";

export default function CountdownOnly() {
  useEffect(() => {
    const targetDate = new Date("2025-11-16T00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const daysEl = document.getElementById("days");
      const hoursEl = document.getElementById("hours");
      const minutesEl = document.getElementById("minutes");
      const secondsEl = document.getElementById("seconds");

      if (daysEl) daysEl.innerText = String(days).padStart(2, "0");
      if (hoursEl) hoursEl.innerText = String(hours).padStart(2, "0");
      if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, "0");
      if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, "0");
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <div className="countdown">
        <div>
          <span id="days">00</span>
          <p>Siku</p>
        </div>
        <div>
          <span id="hours">00</span>
          <p>Saa</p>
        </div>
        <div>
          <span id="minutes">00</span>
          <p>Dakika</p>
        </div>
        <div>
          <span id="seconds">00</span>
          <p>Sekunde</p>
        </div>
      </div>
    </section>
  );
}
