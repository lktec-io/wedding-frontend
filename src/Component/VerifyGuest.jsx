import { useState, useEffect, useRef } from "react";
import QrScanner from "qr-scanner";
import "./VerifyGuest.css";

export default function VerifyGuest() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scanMode, setScanMode] = useState(false);
  const videoRef = useRef(null);
  const scannerRef = useRef(null);

  const handleVerify = async (guestCode) => {
    const enteredCode = guestCode || code.trim().toUpperCase();
    if (!enteredCode) return alert("Tafadhali weka au scan code ya mgeni");

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: enteredCode }),
      });

      const data = await res.json();
      console.log("✅ Response:", data); // ongeza hii uone response
      setLoading(false);

      if (res.status === 200) {
        setResult({
          success: true,
          status: "new",
          guest: data.guest,
          message: "✅ Mgeni amethibitishwa kikamilifu check-in!",
        });
      } else if (res.status === 409) {
        setResult({
          success: false,
          status: "checked",
          guest: data.guest,
          message: "⚠️ Mgeni huyu tayari ame-check-in!",
        });
      } else {
        setResult({
          success: false,
          status: "invalid",
          message: data.message || "Code haijatambulika.",
        });
      }
    } catch (error) {
      console.error("Verification error:", error);
      setLoading(false);
      setResult({ success: false, message: "Tatizo la mtandao. Jaribu tena." });
    }
  };

  // ✅ Start/Stop Scanner
  useEffect(() => {
    if (scanMode && videoRef.current) {
      const scanner = new QrScanner(
        videoRef.current,
        (result) => {
          if (result?.data) {
            const text = result.data.trim();
            try {
              // Ikiwa QR ni link kamili — peleka moja kwa moja kwenye invite page
              const url = new URL(text);
              const uuid = url.pathname.split("/").pop();
              window.location.href = `https://wedding.nardio.online/invite/${uuid}`;
            } catch {
              // Ikiwa ni code tu — verify locally
              handleVerify(text);
            }
            setScanMode(false);
            scanner.stop();
          }
        },
        { returnDetailedScanResult: true }
      );
      scannerRef.current = scanner;
      scanner.start();

      return () => {
        scanner.stop();
        scanner.destroy();
      };
    }
  }, [scanMode]);

  return (
    <div className="verify-container">
      <h2>🎟️ Verification Portal</h2>
      <p>Ingiza au scan code kuthibitisha mgeni.</p>

      <div className="verify-options">
        {!scanMode ? (
          <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleVerify();
              }}
            >
              <input
                type="text"
                placeholder="Weka code hapa..."
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                maxLength={10}
              />
              <button type="submit" disabled={loading}>
                {loading ? "Inathibitisha..." : "Thibitisha"}
              </button>
            </form>

            <button className="switch-btn" onClick={() => setScanMode(true)}>
              📷 Scan QR Code
            </button>
          </>
        ) : (
          <div className="scanner-box">
            <video
              ref={videoRef}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <button
              className="switch-btn cancel"
              onClick={() => setScanMode(false)}
            >
              ❌ Funga Scanner
            </button>
          </div>
        )}
      </div>

      {result && (
        <div
          className={`verify-result ${
            result.success
              ? "success"
              : result.status === "checked"
              ? "checked"
              : "error"
          }`}
        >
          <p>{result.message}</p>
          {result.guest && (
            <div className="guest-info">
              <p>
                <strong>Jina:</strong> {result.guest.name}
              </p>
              <p>
                <strong>Aina:</strong> {result.guest.type}
              </p>
              {/* <p>
                <strong>Simu:</strong> {result.guest.phone || "—"}
              </p> */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
