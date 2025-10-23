import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import inviteTemplate from "../assets/love.jpg";
// import "./InvitationCard.css";

export default function InvitationCard() {
  const { uuid } = useParams();
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuest = async () => {
      try {
        const res = await fetch(`https://wedding.nardio.online/api/guest/${uuid}`);
        if (!res.ok) throw new Error("Guest not found");
        const data = await res.json();
        setGuest(data);
      } catch (err) {
        console.error("Error fetching guest:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGuest();
  }, [uuid]);

  if (loading) return <p className="loading">⏳ Inapakia taarifa zako...</p>;
  if (error) return <p className="error">❌ {error}</p>;

  const splitName = guest?.name ? guest.name.split(" ") : [];

  return (
    <div className="invite invite-card">
      <img src={inviteTemplate} alt="Wedding Invitation" />

      {guest && (
        <div className="overlay-content">
          <p className="guest-name">
            {splitName[0]?.toUpperCase()}
            <br />
            {splitName[1]?.toUpperCase()}
          </p>

          <div className="qr-box">
            <QRCode
              value={`https://wedding.nardio.online/invite/${uuid}`}
              size={75}
              level={"L"}
              bgColor="transparent"
              fgColor="#fff"
            />
          </div>

          <p className="guest-type">{guest.type?.toUpperCase()}</p>
        </div>
      )}
    </div>
  );
}
