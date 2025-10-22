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

  if (loading)
    return <p style={{ textAlign: "center" }}>⏳ Inapakia taarifa zako...</p>;
  if (error)
    return <p style={{ textAlign: "center", color: "red" }}>❌ {error}</p>;
  if (!guest || !guest.name)
    return (
      <p style={{ textAlign: "center", color: "red" }}>
        ❌ Hakuna taarifa za mgeni huyu.
      </p>
    );

  return (
    <div
      className="invite-card"
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* =======================
          KADI YA MWALIKO (Card)
      =========================*/}
      <div
        className="card-wrapper"
        style={{
          position: "relative",
          marginBottom: "30px",
        }}
      >
        <img
          src={loveImg}
          alt="Wedding Card"
          style={{
            width: "100%",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            padding: "15px 25px",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "8px",
              textTransform: "uppercase",
            }}
          >
            {guest.name}
          </p>

          <QRCode
            value={`https://wedding.nardio.online/invite/${uuid}`}
            size={90}
            bgColor="transparent"
            fgColor="#fff"
          />

          <p
            style={{
              fontSize: "18px",
              marginTop: "10px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {guest.type || ""}
          </p>
        </div>
      </div>

      {/* =======================
          MAELEZO YA MWALIKO
      =========================*/}
      <div
        className="invite-details"
        style={{
          backgroundColor: "#fff8f0",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ color: "#b56576", marginBottom: "10px" }}>
          KADI YA MWALIKO
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          Ndugu <strong>{guest.name}</strong>,<br />
          Pokea kadi ya mwaliko wa sherehe ya Harusi ya{" "}
          <strong>Flowen & Susan</strong>
          <br />
          <br />
          🗓 <strong>Tarehe:</strong> Jumamosi, 18 Oktoba 2025
          <br />
          ⏰ <strong>Muda:</strong> Saa 12 Jioni
          <br />
          📍 <strong>Mahali:</strong> Tughimbe Hall Mbeya - Simba Hall
          <br />
          <br />
          Kwa mawasiliano, wasiliana na{" "}
          <strong>+255 743 181 756</strong>
          <br />
          <br />
          Bofya hapa kupata taarifa zaidi, kuacha ujumbe wa sauti, na kuona
          ramani ya eneo la tukio 👇
          <br />
          <a
            href={`https://wedding.nardio.online/invite/${uuid}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#007bff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            https://wedding.nardio.online/invite/{uuid}
          </a>
          <br />
          <br />
          <strong>Karibu Sana!</strong> 💖
        </p>
      </div>
    </div>
  );
}
