import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
// import "./InvitationCard.css"; // hakikisha upo na style file

export default function InvitationCard() {
  const { uuid } = useParams();
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuest = async () => {
      try {
        const res = await fetch(`https://wedding.nardio.online/api/guest/${uuid}`);
        const data = await res.json();
        setGuest(data);
      } catch (error) {
        console.error("Error fetching guest:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGuest();
  }, [uuid]);

  if (loading) return <p>⏳ Inapakia taarifa zako...</p>;
  if (!guest || !guest.name) return <p>❌ Hakuna taarifa za mgeni huyu.</p>;

  return (
    <div className="invite-card">
      <div className="card-wrapper" style={{ position: "relative", textAlign: "center" }}>
        <img
          src="/love.jpg"
          alt="Wedding Card"
          className="card-image"
          style={{ width: "100%", borderRadius: "10px" }}
        />

        {/* Guest name and QR code juu ya picha */}
        <div
          style={{
            position: "absolute",
            top: "30px",
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
        </div>
      </div>

      {/* Familia section (chini ya card) */}
      <div className="familia" style={{ marginTop: "20px", textAlign: "center" }}>
        <h4>
          Familia ya Mr & Mrs Hagai Mwakalindile wanayo furaha kubwa
          kukualika kwenye sherehe ya harusi ya Flowen & Susan
        </h4>
        <p className="guest" style={{ fontWeight: "bold", marginTop: "10px" }}>
          {guest.name.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
