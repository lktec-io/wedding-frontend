import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import "./RSVPSection.css";

const successSound = new Audio("/success.mp3");

export default function RSVPSection() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const confettiRef = useRef(null);

  const handleYesClick = () => {
    setSending(true);
    setSuccess(false);

    setTimeout(() => {
      setSending(false);

      // ✅ CONFETTI BOUND TO LOCAL CANVAS
      const myConfetti = confetti.create(confettiRef.current, {
        resize: true,
        useWorker: true,
      });

      myConfetti({
        particleCount: 160,
        spread: 90,
        startVelocity: 35,
        origin: { x: 0.5, y: 0.8 }, // 🔥 chini ya button
        gravity: 0.7,
        ticks: 200,
        colors: ["#df3d07", "#ffcc00", "#ffffff", "#22c55e"],
      });

      successSound.currentTime = 0;
      successSound.play().catch(() => {});

      setTimeout(() => setSuccess(true), 700);
    }, 500);
  };

  return (
    <div className="rsvp">
      <h2>Utajumuika Nasi?</h2>

      {/* 🔥 CONFETTI CANVAS */}
      <canvas ref={confettiRef} className="confetti-canvas" />

      <div className="rsvp-buttons">
        <button className="yes-btn" onClick={handleYesClick} disabled={sending}>
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
