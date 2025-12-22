import { useState } from "react";
import confetti from "canvas-confetti";
import "./RSVPSection.css";

// 🔊 Success sound
const successSound = new Audio("/success.mp3");

export default function RSVPSection() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleYesClick = () => {
    setSending(true);
    setSuccess(false);

    // STEP 1: simulate sending
    setTimeout(() => {
      setSending(false);

      // STEP 2: confetti fullscreen
      const myConfetti = confetti.create(document.body, {
        resize: true,
        useWorker: true,
      });

      for (let i = 0; i < 5; i++) {
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

      // STEP 3: sound
      successSound.currentTime = 0;
      successSound.play().catch(() => {});

      // STEP 4: show success message AFTER confetti
      setTimeout(() => {
        setSuccess(true);
      }, 900);
    }, 800);
  };

  const handleNoClick = () => {
    setSending(true);
    setSuccess(false);
    setTimeout(() => setSending(false), 600);
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

        <button
          className="no-btn"
          onClick={handleNoClick}
          disabled={sending}
        >
          ✗ Hapana, Sitakuwepo
        </button>
      </div>

      {/* ⏳ Sending */}
      {sending && <p className="sending">⏳ Inatuma...</p>}

      {/* ✅ Success message */}
      {success && (
        <div className="success-box">
          <p>Asante! Ujumbe wako umepokelewa.</p>
        </div>
      )}
    </div>
  );
}
