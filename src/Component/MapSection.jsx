export default function MapSection() {
  return (
    <div className="map">
      <div className="location">
        <p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 384 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961
 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
            ></path>
          </svg>{" "}
        </p>
        <h3>Eneo La Tukio📍</h3>
      </div>

      <iframe
        title="Event Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5086.199902635288!2d33.4520246760696!3d-8.90962579145006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19009faea1e218c3%3A0xbf9cfeea132cd456!2sRoyal%20Tughimbe%20hotel!5e1!3m2!1sen!2stz!4v1761076809133!5m2!1sen!2stz&gestureHandling=greedy"
        className="map-frame"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
