import { useState, useEffect } from "react";
import "./RSVPSection.css";
import Scrollup from "./Scrollup";
import Floating from "./Floating";

export default function RSVPSection() {
  const [response, setResponse] = useState(null);
  const [showPetals, setShowPetals] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleYesClick = () => {
    setResponse("yes");
    setShowPetals(true);
    setShowPopup(true);

    // Petals disappear after 2.5 seconds
    setTimeout(() => {
      setShowPetals(false);
    }, 2500);
  };

  const handleNoClick = () => {
    setResponse("no");
    setShowPopup(true);
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
        <button className="yes-btn" onClick={handleYesClick}>
          ✓ Ndiyo, Nitakuwepo
        </button>
        <button className="no-btn" onClick={handleNoClick}>
          ✗ Hapana, Sitakuwepo
        </button>
      </div>

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
