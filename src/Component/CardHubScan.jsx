import { useState } from "react";
import Scanner from "./Scanner";
import confetti from "canvas-confetti";
import "./styles.css"; // TUNATUMIA ILE ILE CSS

export default function CardHubScan() {
  const [result, setResult] = useState(null);

  const successSound = new Audio("/success.mp3");
  const blockedSound = new Audio("/blocked.mp3");

  const handleScan = async (qr) => {
    if (!qr) return;

    const res = await fetch("/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ qr_code: qr }),
    });

    const data = await res.json();

    if (data.status === "success") {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
      });
      successSound.play();
    } else {
      blockedSound.play();
    }

    setResult(data);
  };

  const handleBack = () => {
    setResult(null);
  };

  return (
    <div className="container">
      <header>
        <img src="/pcm.png" alt="Logo" />
        <h2>Card-Hub Verification Portal</h2>
      </header>

      {!result && <Scanner onScan={handleScan} />}

      {result && (
        <div className={`result ${result.status}`}>
          {result.name && <h3>{result.name}</h3>}
          <strong>{result.message}</strong>

          <button className="batan back-btn" onClick={handleBack}>
            ⬅ Scan Next
          </button>
        </div>
      )}
    </div>
  );
}
