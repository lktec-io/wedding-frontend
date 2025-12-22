import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import "./RSVPSection.css";

const successSound = new Audio("/success.mp3");

export default function RSVPSection() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const yesBtnRef = useRef(null);

  const handleYesClick = () => {
    setSending(true);
    setSuccess(false);

    setTimeout(() => {
      setSending(false);

      const rect = yesBtnRef.current.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      const myConfetti = confetti.create(undefined, {
        resize: true,
        useWorker: true,
      });

      for (let i = 0; i < 5; i++) {
        myConfetti({
          particleCount: 120,
          spread: 70,
          startVelocity: 28,
          gravity: 1.2,
          ticks: 200,
          origin: {
            x,
            y: Math.min(y + 0.12, 0.9),
          },
          colors: ["#df3d07", "#ffcc00", "#ffffff", "#22c55e"],
        });
      }

      successSound.currentTime = 0;
      successSound.play().catch(() => {});

      setTimeout(() => {
        setSuccess(true);
      }, 900);
    }, 600);
  };

  return (
    <div className="rsvp">
      <h2>Utajumuika Nasi?</h2>

      <div className="rsvp-buttons">
        <button
          ref={yesBtnRef}
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
        <div className="success-box">Asante! Ujumbe wako umepokelewa.</div>
      )}
    </div>
  );
}
