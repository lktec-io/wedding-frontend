import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import inviteTemplate from "../assets/valid.png";

export default function InvitationCard() {
  const { uuid } = useParams();
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuest = async () => {
      try {
        const res = await fetch(
          `https://wedding.nardio.online/api/guest/${uuid}`
        );
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
  if (error) return <p className="error">❌{error}</p>;
  // Safely split the name (avoid breaking if null or empty)
  const splitName =
    typeof guest?.name === "string" && guest.name.trim().length > 0
      ? guest.name.split(" ")
      : [];
  const firstName = splitName[0]?.toUpperCase() || "";
  const lastName = splitName[1]?.toUpperCase() || "";
  const guestType = guest?.type ? guest.type.toUpperCase() : "";
  return (
    <div className="invite invite-card">
      <img src={inviteTemplate} alt="Wedding Invitation" />
      {guest && (
      <div className="overlay-content">
  {/* <p className="guest-name">
    {firstName}
    {lastName && (
      <>
        <br />
        {lastName}
      </>
    ) }
  </p> */}
  <p className="guest-name">
  {guest && guest.name ? guest.name : "Guest not found"}
</p>
  <div className="qr-wrapper">
    <div className="qr-box">
      <QRCode
        value={`https://wedding.nardio.online/invite/${uuid}`}
        size={70}
        level="L"
        bgColor="#ffffff"
        fgColor="#000000"
      />
    </div>
    <p className="guest-type">{guestType}</p>
  </div>
</div>

      )}
    </div>
  );
}
