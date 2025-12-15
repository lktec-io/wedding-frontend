import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AudioGuestbook from "./Component/AudioGuestbook";
import CountdownOnly from "./Component/CountdownOnly";
import DownloadCardButton from "./Component/DownloadCardButton";
import Family from "./Component/Family";
import Word from "./Component/Word";
import InvitationCard from "./Component/InvitationCard";
import MapSection from "./Component/MapSection";
import RSVPSection from "./Component/RSVPSection";
import VerifyGuest from "./Component/VerifyGuest";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Personalized invite link for each guest */}
        <Route path="/verify" element={<VerifyGuest />} />
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
            <div className="page-wrapper" style={{ textAlign: "center", padding: "91px" }}>
              <h2 style={{ fontSize: "28px", marginBottom: "0px", color: "#ffffffff",marginTop: "150px" }}>💍 Donewell & Angela Wedding</h2>
              <p style={{ fontSize: "28px",color: "#ffffffff",marginTop: "0px" }}>Official Invitation Website</p>
              <p style={{ color: "#ffffffff", marginTop: "150px", fontSize: "20px" }}>
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
