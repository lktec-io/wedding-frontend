import { useState, useRef } from 'react';
import { FaRedo, FaPaperPlane, FaMicrophone } from 'react-icons/fa';
import './AudioGuestbook.css';

export default function AudioGuestbook({ guest = "Donewell & Angella" }) {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [saving, setSaving] = useState(false);
  const [sent, setSent] = useState(false);
  const [countdown, setCountdown] = useState(30);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const countdownIntervalRef = useRef(null);

 const startRecording = async () => {
  // Reset kila kitu kabla ya kurekodi upya
  setAudioURL(null);
  setSent(false);
  setSaving(false);

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorderRef.current = new MediaRecorder(stream);
  audioChunksRef.current = [];
  setCountdown(30);

  mediaRecorderRef.current.ondataavailable = (e) => {
    audioChunksRef.current.push(e.data);
  };

  mediaRecorderRef.current.onstop = () => {
    const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
    const url = URL.createObjectURL(blob);
    setAudioURL(url);
  };

  mediaRecorderRef.current.start();
  setRecording(true);

  countdownIntervalRef.current = setInterval(() => {
    setCountdown((prev) => {
      if (prev <= 1) {
        stopRecording();
        return 0;
      }
      return prev - 1;
    });
  }, 1000);
};


  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    setRecording(false);
    clearInterval(countdownIntervalRef.current);
  };

  const sendMessage = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSent(true);
    }, 2000);
  };

  return (
    <div className="salamu">
      <h3> Acha Salamu Zako za Upendo! 🎤</h3>
      <p>Bonyeza hapa kurekodi ujumbe wa sauti kwa {guest}.</p>

      {!audioURL && !recording && (
        <button className="record-btn" onClick={startRecording}>
          <FaMicrophone /> Anza kurekodi sasa!
        </button>
      )}
      {recording && (
        <>
          <p className="recording">⏺️ Inarekodi... zimebaki sekunde {countdown}</p>
          <button className="stop-btn" onClick={stopRecording}>🛑 Sitisha Kurekodi</button>
        </>
      )}

      {audioURL && (
        <>
          <p className="preview-label">Sikiliza ujumbe wako kabla ya kutuma:</p>
          <audio controls src={audioURL} className="audio-player"></audio>

          <div className="button-row">
            <button className="retry-btn" onClick={startRecording}>
              <FaRedo /> Rekodi Tena
            </button>
            <button className="send-btn" onClick={sendMessage} >
              <FaPaperPlane /> Tuma Ujumbe
            </button>
          </div>
        </>
      )}

      {saving && <p className="saving">⏳ Inahifadhi...</p>}
      {sent && <p className="confirmate">Asante! Ujumbe wako wa sauti umehifadhiwa.</p>}
    </div>
  );
}
