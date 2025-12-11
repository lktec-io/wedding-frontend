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
        <h3>Eneo La Tukio 📍</h3>
      </div>
      <iframe
        title="Event Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5096.432745668214!2d33.450527376076614!3d-8.91191599148113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19009f4dc3e31535%3A0xd1f03a41a9fd94af!2sTanzania%20Institute%20of%20Accountancy%20(T.I.A)%20Mbeya%20Campus!5e1!3m2!1sen!2stz!4v1765423995709!5m2!1sen!2stz"
        className="map-frame"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
