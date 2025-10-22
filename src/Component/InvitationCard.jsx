import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import loveImg from "../assets/love.jpg";

export default function InvitationCard() {
  const { uuid } = useParams();
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cardRef = useRef();

  useEffect(() => {
    const fetchGuest = async () => {
      try {
        const res = await fetch(`https://wedding.nardio.online/api/guest/${uuid}`);
        if (!res.ok) throw new Error("Guest not found");
        const data = await res.json();
        setGuest(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGuest();
  }, [uuid]);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current);
    const link = document.createElement("a");
    link.download = `${guest.name}-Invitation.jpg`;
    link.href = canvas.toDataURL("image/jpeg", 1.0);
    link.click();
  };

  if (loading) return <p style={{ textAlign: "center" }}>⏳ Inapakia taarifa zako...</p>;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>❌ {error}</p>;
  if (!guest) return <p style={{ textAlign: "center" }}>❌ Hakuna taarifa za mgeni huyu.</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Kadi yenye background */}
      <div
        ref={cardRef}
        style={{
          width: "100%",
          maxWidth: "720px",
          aspectRatio: "16/9",
          backgroundImage: `url(${loveImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "15px",
          position: "relative",
          color: "white",
          padding: "30px",
          margin: "auto",
          boxShadow: "0 5px 20px rgba(0,0,0,0.4)",
        }}
      >
        {/* Jina la mgeni */}
        <h2 style={{ fontSize: "26px", fontWeight: "bold", marginTop: "20px" }}>
          {guest.name.toUpperCase()}
        </h2>
        <p style={{ fontSize: "20px", marginBottom: "10px" }}>
          {guest.type === "Double" ? "DOUBLE" : "SINGLE"} INVITATION
        </p>

        {/* QR Code */}
        <div style={{ marginTop: "15px" }}>
          <QRCode
            value={`https://wedding.nardio.online/invite/${uuid}`}
            size={100}
            bgColor="transparent"
            fgColor="#fff"
          />
        </div>

        {/* Taarifa za sherehe */}
        <div
          style={{
            position: "absolute",
            bottom: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            backgroundColor: "rgba(0,0,0,0.4)",
            borderRadius: "10px",
            padding: "10px 15px",
            lineHeight: "1.5",
          }}
        >
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>
            KADI YA MWALIKO
          </p>
          <p>
            Ndugu {guest.name}, pokea kadi ya mwaliko wa sherehe ya Harusi ya{" "}
            <strong>Flowen & Susan</strong>.
          </p>
          <p>🗓 Tarehe: Jumamosi, 18 Oktoba 2025</p>
          <p>⏰ Muda: Saa 12 Jioni</p>
          <p>📍 Mahali: Tughimbe Hall Mbeya - Simba Hall</p>
          <p>📞 Mawasiliano: +255 743 181 756</p>
          <p style={{ fontStyle: "italic", marginTop: "8px" }}>
            Dress Code: Gentlemen - Black Suit | Ladies - Gold Dress
          </p>
        </div>
      </div>

      {/* Button ya kupakua */}
      <button
        onClick={handleDownload}
        style={{
          marginTop: "15px",
          backgroundColor: "#f06292",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "10px 20px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        💌 Pakua Kadi
      </button>

      {/* Maelezo chini */}
      <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
        Kisha tumia picha hii kumtumia mgeni kupitia WhatsApp.
      </p>
    </div>
  );
}
