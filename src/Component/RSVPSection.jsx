import { useState } from "react";
import confetti from "canvas-confetti";
import "./RSVPSection.css";

// 🔊 Success sound (weka success.mp3 kwenye /public folder)
const successSound = new Audio("/success.mp3");

export default function RSVPSection() {
  const [sending, setSending] = useState(false);

  const handleYesClick = () => {
    setSending(true);

    setTimeout(() => {
      setSending(false);

      // 🔥 Fullscreen confetti
      confetti({
        particleCount: 250,
        startVelocity: 30,
        spread: 160,
        origin: { x: 0.5, y: 0.4 },
        gravity: 0.6,
        ticks: 200,
        scalar: 1.2,
        colors: ["#df3d07", "#ffcc00", "#ffffff", "#22c55e"],
      });

      // 🔊 Play success sound
      successSound.currentTime = 0; // reset sound
      successSound.play().catch(() => {
        // catch autoplay block if any
        console.log("Play sound requires user interaction");
      });
    }, 500); // small delay to simulate sending
  };

  const handleNoClick = () => {
    setSending(true);
    setTimeout(() => setSending(false), 500);
  };

  return (
    <div className="rsvp">
      <h2>Utajumuika Nasi?</h2>

      <div className="rsvp-buttons">
        <button className="yes-btn" onClick={handleYesClick} disabled={sending}>
          ✓ Ndiyo, Nitakuwepo
        </button>
        <button className="no-btn" onClick={handleNoClick} disabled={sending}>
          ✗ Hapana, Sitakuwepo
        </button>
      </div>

      {sending && <p className="sending">⏳ Inatuma ujumbe wako...</p>}
    </div>
  );
}
