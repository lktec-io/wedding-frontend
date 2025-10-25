import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapSection.css";

export default function MapSection() {
  useEffect(() => {
    // Tengeneza ramani
    const map = L.map("map").setView([-8.90962579145006, 33.4520246760696], 15);

    // Tile layer ya bure kutoka OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Marker kwa eneo la tukio
    L.marker([-8.90962579145006, 33.4520246760696])
      .addTo(map)
      .bindPopup("<b>Royal Tughimbe Hotel</b><br />Eneo la Tukio 📍")
      .openPopup();

    // Clean up map wakati component inafungwa
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="map">
      <div className="location">
        <p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 384 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 
              0 85.961 85.961 0 192 0s192 85.961 192 192
              c0 77.413-26.97 99.031-172.268 309.67
              -9.535 13.774-29.93 13.773-39.464 0zM192 
              272c44.183 0 80-35.817 80-80s-35.817-80
              -80-80-80 35.817-80 80 35.817 80 80 80z"
            ></path>
          </svg>
        </p>
        <h3>Eneo La Tukio 📍</h3>
      </div>

      {/* Container ya Leaflet map */}
      <div id="map" className="map-frame"></div>

      {/* Link ya kufungua kwenye Google Maps */}
      <a
        href="https://www.google.com/maps/place/Royal+Tughimbe+Hotel/@-8.9096257,33.4520247,17z"
        target="_blank"
        rel="noopener noreferrer"
        className="map-link"
      >
        Fungua kwenye Google Maps
      </a>
    </div>
  );
}
