import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import "./RSVPSection.css";

const successSound = new Audio("/success.mp3");

export default function RSVPSection() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const confettiRef = useRef(null);
  const myConfetti = useRef(null);

  const handleYesClick = () => {
    setSending(true);
    setSuccess(false);

    // Initialize confetti instance once
    if (!myConfetti.current && confettiRef.current) {
      myConfetti.current = confetti.create(confettiRef.current, {
        resize: true,
        useWorker: true,
      });
    }

    setTimeout(() => {
      setSending(false);

      if (myConfetti.current) {
        myConfetti.current({
          particleCount: 350, // 🔥 Idadi imeongezeka kutoka 150 hadi 400
          spread: 100, // Imepanuka kidogo ili zijae vizuri
          origin: { x: 0.5, y: 0.5 },
          colors: ["#df3d07", "#ffcc00", "#ffffff", "#22c55e"],
          gravity: 1.2, // Zitaanguka haraka kidogo kwa sababu ni nyingi
          ticks: 300, // Zitakaa muda mrefu kidogo kabla ya kupotea
          scalar: 0.9, // 🔥 Hii ndiyo size (Chini ya 1 ni ndogo, juu ya 1 ni kubwa)
          drift: 0,
        });
      }
      successSound.currentTime = 0;
      successSound.play().catch(() => {});
      setTimeout(() => setSuccess(true), 500);
    }, 800);
  };

  return (
    <div className="rsvp">
      {/* Canvas sasa imefungiwa ndani ya div ya rsvp pekee */}
      <canvas ref={confettiRef} className="confetti-canvas" />

      <div className="rsvp-content">
        <h2>Utajumuika Nasi?</h2>

        <div className="rsvp-buttons">
          <button
            className="yes-btn"
            onClick={handleYesClick}
            disabled={sending}
          >
            {sending ? "⏳ Inatuma..." : "✓ Ndiyo, Nitakuwepo"}
          </button>

          <button className="no-btn" disabled={sending}>
            ✗ Hapana, Sitakuwepo
          </button>
        </div>

        {success && (
          <div className="success-box">Asante! Ujumbe wako umepokelewa.</div>
        )}
      </div>
    </div>
  );
}
