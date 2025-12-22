import { useState } from "react";
import confetti from "canvas-confetti";
import "./RSVPSection.css";

// 🔊 Success sound
const successSound = new Audio("/success.mp3");

export default function RSVPSection() {
  const [sending, setSending] = useState(false);

  const handleYesClick = () => {
    setSending(true);

    setTimeout(() => {
      setSending(false);

      // 🔥 Fullscreen Confetti
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { x: 0.5, y: 0.3 },
        gravity: 0.6,
        ticks: 200,
        scalar: 1.2,
      });

      // 🔊 Play success sound
      successSound.play();
    }, 1000);
  };

  const handleNoClick = () => {
    setSending(true);
    setTimeout(() => setSending(false), 1000);
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
