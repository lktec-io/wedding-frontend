import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import "./RSVPSection.css";

const successSound = new Audio("/success.mp3");

export default function RSVPSection() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const yesBtnRef = useRef(null);

  const handleYesClick = () => {
    if (!yesBtnRef.current) return;

    setSending(true);
    setSuccess(false);

    setTimeout(() => {
      setSending(false);

      // 🔹 Get exact button position
      const rect = yesBtnRef.current.getBoundingClientRect();

      const x = (rect.left + rect.width / 2) / window.innerWidth;

      // 🔥 PUSH CONFETTI DOWN BELOW THE BUTTON
      const y =
        (rect.top + rect.height) / window.innerHeight + 0.05;

      const myConfetti = confetti.create(undefined, {
        resize: true,
        useWorker: true,
      });

      // 🔥 Multiple soft bursts FROM BUTTON DOWN
      for (let i = 0; i < 4; i++) {
        myConfetti({
          particleCount: 90,
          spread: 70,
          startVelocity: 18, // 🔴 LOW so it doesn’t jump up
          gravity: 1.4,      // 🔴 Pull down fast
          ticks: 180,
          origin: {
            x,
            y: Math.min(y, 0.9), // never go beyond bottom
          },
          colors: ["#df3d07", "#ffcc00", "#ffffff", "#22c55e"],
        });
      }

      // 🔊 Sound
      successSound.currentTime = 0;
      successSound.play().catch(() => {});

      // ✅ Show success message AFTER confetti
      setTimeout(() => {
        setSuccess(true);
      }, 800);
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
