import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";   


const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a href="tel:+255 674 022 265" className="phone-btn">
        <Phone size={18} />
      </a>
      <a
        href="https://wa.me/+255 674 022 265"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
};

export default FloatingButtons;
