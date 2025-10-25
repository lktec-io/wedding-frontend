import { useState, useEffect } from "react";
import "./RSVPSection.css";
import Scrollup from "./Scrollup";
import Floating from "./Floating";

export default function RSVPSection() {
  const [response, setResponse] = useState(null);
  const [showPetals, setShowPetals] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [sending, setSending] = useState(false); // 🌟 added state

  const handleYesClick = () => {
    setSending(true); // onyesha "inatuma..."
    setTimeout(() => {
      setSending(false);
      setResponse("yes");
      setShowPetals(true);
      setShowPopup(true);

      // Petals disappear after 2.5 seconds
      setTimeout(() => {
        setShowPetals(false);
      }, 2500);
    }, 1500); // muda wa kutuma (sekunde 1.5)
  };

  const handleNoClick = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setResponse("no");
      setShowPopup(true);
    }, 1500);
  };

  const closePopup = () => setShowPopup(false);
  useEffect(() => {
    if (showPetals) {
      const container = document.querySelector(".rsvp");
      for (let i = 0; i < 30; i++) {
        const petal = document.createElement("div");
        petal.className = "petal";
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDelay = `${Math.random()}s`;
        container.appendChild(petal);
        setTimeout(() => petal.remove(), 2500);
      }
    }
  }, [showPetals]);

  return (
    <div className="rsvp">
      <Scrollup />
      <Floating />
      <h2>Utajumuika Nasi?</h2>

      <div className="rsvp-buttons">
        <button className="yes-btn" onClick={handleYesClick} disabled={sending}>
          ✓ Ndiyo, Nitakuwepo
        </button>
        <button className="no-btn" onClick={handleNoClick} disabled={sending}>
          ✗ Hapana, Sitakuwepo
        </button>
      </div>

      {/* ⏳ Loading Message */}
      {sending && <p className="sending">⏳ Inatuma ujumbe wako...</p>}

      {/* 🌸 Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            {response === "yes" ? (
              <>
                <h3>✅ Asante!</h3>
                <p>Ujumbe wako umepokelewa. Tunakutarajia kwa furaha kubwa 💐</p>
              </>
            ) : (
              <>
                <h3>😔 Pole!</h3>
                <p>Tutakukosa siku hiyo, lakini tunakutakia heri nyingi ❤️</p>
              </>
            )}
            <button onClick={closePopup}>Funga</button>
          </div>
        </div>
      )}
    </div>
  );
}
