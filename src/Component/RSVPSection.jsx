import { useState, useEffect } from 'react';
import './RSVPSection.css';
import Scrollup from './Scrollup';
import Floating from './Floating'

export default function RSVPSection() {
  const [response, setResponse] = useState(null);
  const [showPetals, setShowPetals] = useState(false);

  const handleYesClick = () => {
    setResponse('yes');
    setShowPetals(true);

    // Petals disappear after 2.5 seconds
    setTimeout(() => {
      setShowPetals(false);
    }, 2500);
  };

  useEffect(() => {
    if (showPetals) {
      const container = document.querySelector('.rsvp');
      for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDelay = `${Math.random()}s`;
        container.appendChild(petal);
        setTimeout(() => petal.remove(), 2500);
      }
    }
  }, [showPetals]);

  return (
    <div className="rsvp">
      <Scrollup/>
   <Floating/>
      <h2>Utajumuika Nasi?</h2>
      <div className="rsvp-buttons">
        <button className="yes-btn" onClick={handleYesClick}>✓ Ndiyo, Nitakuwepo</button>
        <button className="no-btn" onClick={() => setResponse('no')}>✗ Hapana, Sitakuwepo</button>      
      </div>
      {response && <p className="confirmation">✅ Asante! Ujumbe wako umepokelewa.</p>}
    </div>
  );
}
