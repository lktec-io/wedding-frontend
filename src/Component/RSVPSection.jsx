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

      // ✅ GET BUTTON POSITION (viewport-aware)
      const rect = yesBtnRef.current.getBoundingClientRect();

      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y =
        (rect.top + rect.height / 2 + window.scrollY) /
        (document.documentElement.scrollHeight);

      // ✅ CONFETTI ATTACHED TO BODY (NO TRANSFORM ISSUES)
      const myConfetti = confetti.create(document.body, {
        resize: true,
        useWorker: true,
      });

      for (let i = 0; i < 4; i++) {
        myConfetti({
          particleCount: 120,
          spread: 80,
          startVelocity: 35,
          origin: { x, y },
          gravity: 0.7,
          ticks: 220,
          colors: ["#df3d07", "#ffcc00", "#ffffff", "#22c55e"],
        });
      }

      successSound.currentTime = 0;
      successSound.play().catch(() => {});

      setTimeout(() => setSuccess(true), 800);
    }, 500);
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
        <div className="success-box">
          Asante! Ujumbe wako umepokelewa.
        </div>
      )}
    </div>
  );
}
