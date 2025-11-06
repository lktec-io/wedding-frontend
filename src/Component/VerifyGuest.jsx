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
    let scanner;
    let stream;

    const setupScanner = async () => {
      try {
        // ✅ Request high-quality camera feed
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { exact: "environment" }, // kamera ya nyuma
            width: { ideal: 1920 },
            height: { ideal: 1080 },
            frameRate: { ideal: 30 },
            focusMode: "continuous",
            advanced: [{ torch: false, focusMode: "continuous" }],
          },
          audio: false,
        });

        const videoTrack = stream.getVideoTracks()[0];

        // ✅ Force continuous focus (works on most Android phones)
        const capabilities = videoTrack.getCapabilities();
        if (capabilities.focusMode) {
          await videoTrack.applyConstraints({
            advanced: [{ focusMode: "continuous" }],
          });
        }

        // ✅ Assign live stream manually
        videoRef.current.srcObject = stream;
        await videoRef.current.play();

        // ✅ Initialize high-performance QR scanner
        scanner = new QrScanner(
          videoRef.current,
          (result) => {
            if (result?.data) {
              const text = result.data.trim();
              try {
                const url = new URL(text);
                const uuid = url.pathname.split("/").pop();
                window.location.href = `https://wedding.nardio.online/invite/${uuid}`;
              } catch {
                handleVerify(text);
              }
              setScanMode(false);
              scanner.stop();
              stream.getTracks().forEach((track) => track.stop());
            }
          },
          {
            returnDetailedScanResult: false,
            maxScansPerSecond: 25, // ⚡ high scan rate
            highlightScanRegion: false,
            highlightCodeOutline: true,
          }
        );

        scannerRef.current = scanner;
        await scanner.start();
      } catch (err) {
        console.error("Camera setup error:", err);
        alert(
          "Kuna tatizo na kamera. Hakikisha ruhusa za kamera zimewezeshwa, au tumia Chrome browser."
        );
      }
    };

    setupScanner();

    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop();
        scannerRef.current.destroy();
      }
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
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
