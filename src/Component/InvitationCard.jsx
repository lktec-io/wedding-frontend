import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import loveImg from "../assets/love.jpg";

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

  if (loading) return <p style={{ textAlign: "center" }}>⏳ Inapakia taarifa zako...</p>;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>❌ {error}</p>;
  if (!guest || !guest.name) return <p style={{ textAlign: "center", color: "red" }}>❌ Hakuna taarifa za mgeni huyu.</p>;

  return (
    <div className="invite-card">
      <div className="card-wrapper" style={{ position: "relative", textAlign: "left", marginTop: "50px" }}>
        <div className="invite">
          <img src={loveImg} alt="Wedding Card" />
        </div>

        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "8px" }}>
            {guest.name.toUpperCase()}
          </p>

          <QRCode
            value={`https://wedding.nardio.online/invite/${uuid}`}
            size={90}
            bgColor="transparent"
            fgColor="#fff"
          />

          {/* ✅ Onyesha Double / Single */}
          <p style={{ fontSize: "18px", marginTop: "10px", fontWeight: "bold" }}>
            {guest.type ? guest.type.toUpperCase() : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
