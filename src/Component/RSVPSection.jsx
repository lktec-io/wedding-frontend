import { useState, useEffect } from 'react';
import './RSVPSection.css';
import Scrollup from './Scrollup';
import Floating from './Floating';

export default function RSVPSection() {
  const [response, setResponse] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState('');

  const handleResponse = (type) => {
    if (type === 'yes') {
      setPopupText('💚 Asante! Ujumbe wako umepokelewa, tunakutarajia!');
    } else {
      setPopupText('😔 Ujumbe wako umepokelewa, tutakukosa!');
    }

    setResponse(type);
    setShowPopup(true);

    // popup ipotee baada ya sekunde 3
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="rsvp">
      <Scrollup />
      <Floating />

      <h2>Utajumuika Nasi?</h2>

      <div className="rsvp-buttons">
        <button className="yes-btn" onClick={() => handleResponse('yes')}>
          ✓ Ndiyo, Nitakuwepo
        </button>
        <button className="no-btn" onClick={() => handleResponse('no')}>
          ✗ Hapana, Sitakuwepo
        </button>
      </div>

      {/* ✅ Popup Message */}
      {showPopup && (
        <div className="popup-message">
          {popupText}
        </div>
      )}
    </div>
  );
}
