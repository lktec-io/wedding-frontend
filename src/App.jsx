import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AudioGuestbook from "./Component/AudioGuestbook";
import CountdownOnly from "./Component/CountdownOnly";
import DownloadCardButton from "./Component/DownloadCardButton";
import Family from "./Component/Family";
import Word from "./Component/Word";
import InvitationCard from "./Component/InvitationCard";
import MapSection from "./Component/MapSection";
import RSVPSection from "./Component/RSVPSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Personalized invite link for each guest */}
        <Route
          path="/invite/:uuid"
          element={
            <div className="page-wrapper">
              <div className="content-box">
                <InvitationCard />
                <Family />
                <Word />
                <CountdownOnly />
                <RSVPSection />
                <AudioGuestbook />
                <MapSection />
                <DownloadCardButton />
              </div>
            </div>
          }
        />

        {/* Redirect homepage to a "Coming Soon" or main invite */}
        <Route
          path="/"
          element={
            <div className="page-wrapper" style={{ textAlign: "center", padding: "50px" }}>
              <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>💍 Flowen & Susan Wedding</h2>
              <p style={{ fontSize: "18px" }}>Official Invitation Website</p>
              <p style={{ color: "#777", marginTop: "20px" }}>
                Tafadhali tembelea link yako ya kipekee kuangalia mwaliko wako.
              </p>
            </div>
          }
        />

        {/* Handle unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
