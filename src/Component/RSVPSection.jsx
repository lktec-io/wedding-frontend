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

      // 🔥 Fullscreen confetti with multiple burst
      for (let i = 0; i < 5; i++) {
        confetti({
          particleCount: 100,
          startVelocity: 40,
          spread: 160,
          origin: { x: Math.random(), y: Math.random() * 0.5 },
          colors: ["#df3d07", "#ffcc00", "#ffffff", "#22c55e"],
          gravity: 0.6,
          ticks: 200,
        });
      }

      // 🔊 Play success sound
      successSound.currentTime = 0;
      successSound.play().catch(() => {
        console.log("Play sound requires user interaction");
      });
    }, 500); // small delay for effect
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
