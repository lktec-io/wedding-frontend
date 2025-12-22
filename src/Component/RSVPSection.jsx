import { useState } from "react";
import confetti from "canvas-confetti";
import "./RSVPSection.css";

const successSound = new Audio("/success.mp3");

export default function RSVPSection() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleYesClick = (e) => {
    setSending(true);
    setSuccess(false);

    setTimeout(() => {
      setSending(false);

      // ✅ EXACT CLICK POSITION (no guessing, no offsets)
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      confetti({
        particleCount: 180,
        spread: 90,
        startVelocity: 40,
        origin: { x, y },
        gravity: 0.7,
        ticks: 200,
        colors: ["#df3d07", "#ffcc00", "#ffffff", "#22c55e"],
      });

      // 🔊 Sound
      successSound.currentTime = 0;
      successSound.play().catch(() => {});

      setTimeout(() => setSuccess(true), 700);
    }, 500);
  };

  return (
    <div className="rsvp">
      <h2>Utajumuika Nasi?</h2>

      <div className="rsvp-buttons">
        <button
          className="yes-btn"
          onClick={handleYesClick}
          disabled={sending}
        >
          ✓ Ndiyo, Nitakuwepo
        </button>

        <button className="no-btn" disabled={sending}>
          ✗ Hapana, Sitakuwepo
        </button>
      </div>

      {sending && <p className="sending">⏳ Inatuma...</p>}

      {success && (
        <div className="success-box">
          Asante! Ujumbe wako umepokelewa.
        </div>
      )}
    </div>
  );
}
