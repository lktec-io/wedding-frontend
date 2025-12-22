import { useState } from "react";
import "./VerifyGuest.css";

export default function VerifyGuest() {
  const [query, setQuery] = useState("");
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔍 TAFUTA LIST YA WAGENI
  const searchGuest = async () => {
    if (!query.trim()) return alert("Weka jina au code ya mgeni");

    setLoading(true);
    setGuests([]);
    setSelectedGuest(null);
    setResult(null);

    try {
      const res = await fetch("/api/guest/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: query.trim() }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.status === 200) {
        setGuests(data.guests);
      } else {
        setResult({ success: false, message: data.message });
      }
    } catch {
      setLoading(false);
      setResult({ success: false, message: "Tatizo la mtandao" });
    }
  };

  // ✅ CONFIRM CHECK-IN
  const confirmCheckIn = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: selectedGuest.code }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.status === 200) {
        setResult({ success: true, message: "✅ Check-in imefanikiwa" });
        setGuests([]);
        setSelectedGuest(null);
        setQuery("");
      } else {
        setResult({ success: false, message: data.message });
      }
    } catch {
      setLoading(false);
      setResult({ success: false, message: "Tatizo la mtandao" });
    }
  };

  return (
    <div className="verify-container">
      <h2>🎟️ Guest Verification</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchGuest();
        }}
      >
        <input
          type="text"
          placeholder="Ingiza jina AU code"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button disabled={loading}>
          {loading ? "Inatafuta..." : "Tafuta"}
        </button>
      </form>

      {/* 👥 LIST YA WAGENI */}
      {guests.length > 0 && !selectedGuest && (
        <div className="verify-result checked">
          <p>Chagua mgeni sahihi:</p>

          {guests.map((g) => (
            <button
              key={g.id}
              style={{ marginTop: "8px", width: "100%" }}
              onClick={() => setSelectedGuest(g)}
            >
              {g.name} — {g.type} {g.checked_in ? "✔️" : ""}
            </button>
          ))}
        </div>
      )}

      {/* 👤 MGENI ALIYECHAGULIWA */}
      {selectedGuest && (
        <div className="verify-result checked">
          <p><strong>Jina:</strong> {selectedGuest.name}</p>
          <p><strong>Aina:</strong> {selectedGuest.type}</p>
          <p>
            <strong>Status:</strong>{" "}
            {selectedGuest.checked_in
              ? "✔️ Tayari ame-check-in"
              : "❌ Hajacheck-in"}
          </p>

          {!selectedGuest.checked_in && (
            <button onClick={confirmCheckIn} disabled={loading}>
              ✅ Confirm Check-In
            </button>
          )}
        </div>
      )}

      {result && (
        <div className={`verify-result ${result.success ? "success" : "error"}`}>
          {result.message}
        </div>
      )}
    </div>
  );
}
