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

      // ✅ FORCE fullscreen confetti (SAME as VerifyGuest)
      const myConfetti = confetti.create(document.body, {
        resize: true,
        useWorker: true,
      });

      // 🔥 Multiple bursts for visibility
      for (let i = 0; i < 4; i++) {
        myConfetti({
          particleCount: 120,
          spread: 90,
          startVelocity: 45,
          origin: {
            x: Math.random(),
            y: Math.random() * 0.4,
          },
          colors: ["#df3d07", "#ffcc00", "#ffffff", "#22c55e"],
        });
      }

      // 🔊 Play sound (user click → no block)
      successSound.currentTime = 0;
      successSound.play().catch(() => {});
    }, 400);
  };

  const handleNoClick = () => {
    setSending(true);
    setTimeout(() => setSending(false), 400);
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
