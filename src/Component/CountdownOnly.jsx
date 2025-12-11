import React, { useEffect } from "react";

export default function CountdownOnly() {
  useEffect(() => {
    const targetDate = new Date("2025-12-12T00:00:00").getTime();
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

      document.getElementById("days").innerText = String(days).padStart(2, "0");
      document.getElementById("hours").innerText = String(hours).padStart(2, "0");
      document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
      document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="countdown-section">
      <h2 className="countdown-title"> 💞 Muda uliosalia kufika siku ya furaha yetu </h2>

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
