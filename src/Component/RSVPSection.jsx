import { useState } from "react";
import confetti from "canvas-confetti";
import "./RSVPSection.css";

// 🔊 Import sound (weka success.mp3 kwenye /public au path sawa)
const successSound = new Audio("/success.mp3");

export default function RSVPSection() {
  const [sending, setSending] = useState(false);
  const [response, setResponse] = useState(null);

  const handleYesClick = () => {
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setResponse("yes");

      // 🔥 Confetti
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
      });

      // 🔊 Play success sound
      successSound.play();
    }, 1500);
  };

  const handleNoClick = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setResponse("no");
      // hakuna confetti au sound kwa "No"
    }, 1500);
  };

  return (
    <div className="rsvp">
      <h2>Utajumuika Nasi?</h2>

      <div className="rsvp-buttons">
        <button onClick={handleYesClick} disabled={sending}>
          ✓ Ndiyo, Nitakuwepo
        </button>
        <button onClick={handleNoClick} disabled={sending}>
          ✗ Hapana, Sitakuwepo
        </button>
      </div>

      {sending && <p className="sending">⏳ Inatuma ujumbe wako...</p>}
    </div>
  );
}
