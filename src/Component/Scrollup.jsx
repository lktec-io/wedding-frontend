import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react"; 
import "./Scroll.css";

const Scrollup = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`scroll-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <div className="double-arrow">
        <ChevronUp size={20} color="#fff" />
        <ChevronUp size={20} color="#fff" />
      </div>
    </div>
  );
};

export default Scrollup;
