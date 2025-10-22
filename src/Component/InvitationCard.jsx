import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";

export default function InvitationCard() {
  const { uuid } = useParams();
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    fetch(`https://wedding.nardio.online/api/guest/${uuid}`)
      .then(res => res.json())
      .then(data => setGuest(data))
      .catch(err => console.error(err));
  }, [uuid]);

  if (!guest) return <p>Inapakia taarifa zako...</p>;

  return (
    <div className="invite-card">
      <div className="card-wrapper" style={{ position: "relative" }}>
        <img src="/love.jpg" alt="Wedding Card" className="card-image" />
        <div style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "#fff"
        }}>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>{guest.name}</p>
          <QRCode value={`https://wedding.nardio.online/invite/${uuid}`} size={90} />
        </div>
      </div>
    </div>
  );
}
