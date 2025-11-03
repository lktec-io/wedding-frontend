import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Family() {
  const { uuid } = useParams();
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    fetch(`https://wedding.nardio.online/api/guest/${uuid}`)
      .then((res) => res.json())
      .then((data) => setGuest(data))
      .catch((err) => console.error(err));
  }, [uuid]);
  if (!guest) return <p>Inapakia taarifa zako...</p>;

  return (
    <div className="familia">
      <h4>
        Familia ya Mr & Mrs Hagai Mwakalindile wanayo furaha kubwa kukualika:
      </h4>
      <p className="guest">
        {guest ? guest.name.toUpperCase() : "Guest not found"}
      </p>
    </div>
  );
}
