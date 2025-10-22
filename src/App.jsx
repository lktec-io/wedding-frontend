import { BrowserRouter, Routes, Route } from "react-router-dom";
import AudioGuestbook from './Component/AudioGuestbook';
import CountdownOnly from './Component/CountdownOnly';
import DownloadCardButton from './Component/DownloadCardButton';
import Family from './Component/Family';
import Word from './Component/Word';
import InvitationCard from './Component/InvitationCard';
import MapSection from './Component/MapSection';
import RSVPSection from './Component/RSVPSection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* personalized link kwa kila mwalikwa */}
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

        {/* homepage ya kawaida */}
        <Route
          path="/"
          element={
            <div className="page-wrapper">
              <div className="content-box">
                <h2>Welcome to Flowen & Susan’s Wedding Invitation</h2>
                <p>Karibu kutazama mwaliko wako wa kipekee 💌</p>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
