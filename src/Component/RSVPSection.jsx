import { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import "./RSVPSection.css";

const successSound = new Audio("/success.mp3");

export default function RSVPSection() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const yesBtnRef = useRef(null);
  const canvasRef = useRef(null);
  const confettiInstance = useRef(null);

  // Create confetti instance ONCE
  useEffect(() => {
    if (canvasRef.current) {
      confettiInstance.current = confetti.create(canvasRef.current, {
        resize: true,
        useWorker: true,
      });
    }
  }, []);

  const handleYesClick = () => {
    setSending(true);
    setSuccess(false);

    setTimeout(() => {
      setSending(false);

      if (!yesBtnRef.current || !confettiInstance.current) return;

      const btn = yesBtnRef.current;
      const parent = btn.offsetParent;

      // position relative to RSVP container
      const x =
        (btn.offsetLeft + btn.offsetWidth / 2) / parent.offsetWidth;
      const y =
        (btn.offsetTop + btn.offsetHeight / 2) / parent.offsetHeight;

      // 🎉 CONFETTI EXACTLY ON BUTTON
      confettiInstance.current({
        particleCount: 180,
        spread: 90,
        startVelocity: 40,
        origin: { x, y },
        colors: ["#df3d07", "#ffcc00", "#ffffff", "#22c55e"],
        gravity: 0.7,
        ticks: 200,
      });

      // 🔊 Sound
      successSound.currentTime = 0;
      successSound.play().catch(() => {});

      setTimeout(() => setSuccess(true), 700);
    }, 600);
  };

  return (
    <div className="rsvp">
      {/* CONFETTI CANVAS */}
      <canvas ref={canvasRef} className="confetti-canvas" />

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
