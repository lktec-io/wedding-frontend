import { useState } from "react";
import confetti from "canvas-confetti";
import "./RSVPSection.css";

const successSound = new Audio("/success.mp3");

export default function RSVPSection() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleYesClick = () => {
    setSending(true);
    setSuccess(false);
console.log("CONFETTI FIRED");

    setTimeout(() => {
      setSending(false);

      // ✅ FORCE VISIBLE CONFETTI
      const myConfetti = confetti.create(undefined, {
        resize: true,
        useWorker: true,
      });

      for (let i = 0; i < 6; i++) {
        myConfetti({
          particleCount: 120,
          spread: 100,
          startVelocity: 45,
          origin: {
            x: Math.random(),
            y: Math.random() * 0.4,
          },
          colors: ["#df3d07", "#ffcc00", "#ffffff", "#22c55e"],
        });
      }

      successSound.currentTime = 0;
      successSound.play().catch(() => {});

      setTimeout(() => {
        setSuccess(true);
      }, 900);
    }, 800);
  };

  return (
    <div className="rsvp">
      <h2>Utajumuika Nasi?</h2>

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
